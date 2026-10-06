jest.mock("../src/app", () => ({
  LocalSyncData: {
    initializeTransaction: jest.fn(),
    SyncDataOnline: jest.fn(),
    SyncDataOnlineWithoutAuth: jest.fn(),
    rollbackTransaction: jest.fn(),
    markTransactionActions: jest.fn(),
  },
}));

jest.mock("../src/Services/DeleteConnection", () => ({
  DeleteConnectionByIdBulk: jest.fn(),
}));

jest.mock("../src/Api/GetConnections/GetConnectionsBetweenApi", () => ({
  GetConnectionsBetweenApi: jest.fn(),
}));

import { LocalSyncData } from "../src/app";
import { GetConnectionsBetweenApi } from "../src/Api/GetConnections/GetConnectionsBetweenApi";
import { DeleteConnectionByIdBulk } from "../src/Services/DeleteConnection";
import { LocalTransaction } from "../src/Services/Transaction/LocalTransaction";

describe("LocalTransaction connection deletion queue", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("deletes explicitly queued connections before syncing creations", async () => {
    const events: string[] = [];
    (DeleteConnectionByIdBulk as jest.Mock).mockImplementation(async () => {
      events.push("delete");
      return true;
    });
    (LocalSyncData.SyncDataOnline as jest.Mock).mockImplementation(async () => {
      events.push("sync");
    });
    const transaction = new LocalTransaction();

    transaction.deleteConnections([101, 102, 101]);
    await transaction.commitTransaction();

    expect(DeleteConnectionByIdBulk).toHaveBeenCalledWith([101, 102]);
    expect(events).toEqual(["delete", "sync"]);
  });

  test("deduplicates IDs queued by query-based and explicit deletions", async () => {
    (DeleteConnectionByIdBulk as jest.Mock).mockResolvedValue(true);
    (GetConnectionsBetweenApi as jest.Mock).mockResolvedValue([
      { connectionIds: [101, 102] },
      { connectionIds: [102, 103] },
    ]);
    const transaction = new LocalTransaction();

    transaction.deleteConnection(101);
    await transaction.DeleteConnectionsBetweenBulk([
      { ofTheConceptId: 1, type: "a" },
      { ofTheConceptId: 1, type: "b" },
    ]);
    await transaction.commitTransaction();

    expect(DeleteConnectionByIdBulk).toHaveBeenCalledWith([101, 102, 103]);
  });

  test("does not sync creations when a queued deletion fails", async () => {
    (DeleteConnectionByIdBulk as jest.Mock).mockResolvedValue(false);
    const transaction = new LocalTransaction();

    transaction.deleteConnection(101);

    await expect(transaction.commitTransaction()).rejects.toThrow("Failed to delete queued connections");
    expect(LocalSyncData.SyncDataOnline).not.toHaveBeenCalled();
  });
});
