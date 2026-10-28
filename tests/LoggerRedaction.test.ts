import { Logger, redactLogArguments } from "../src/Middleware/logger.service";

jest.mock("../src/app", () => ({
  BaseUrl: { BASE_APPLICATION: "test-app", getRandomizer: () => 1, PostLogger: () => "", LoginUrl: () => "https://backend.test/api/auth/login" },
  get Logger() { return jest.requireActual("../src/Middleware/logger.service").Logger; },
  updateAccessToken: jest.fn(),
}));

const JWT = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIn0.c2lnbmF0dXJl";

function callWithArguments(this: any, ..._a: any[]) {
  // mirrors the SDK call sites: Logger.logfunction("Name", arguments)
  // eslint-disable-next-line prefer-rest-params
  return Logger.logfunction("FreeschemaQueryApi", arguments);
}

describe("package logger redaction", () => {
  beforeEach(() => {
    (Logger as any).packageLogsData = [];
    Logger.logPackageActivationStatus = true;
  });
  afterEach(() => {
    Logger.logPackageActivationStatus = false;
  });

  test("a JWT passed as an explicit token argument never reaches the queued log", () => {
    callWithArguments({ type: "the_user" }, JWT);
    const queued = JSON.stringify((Logger as any).packageLogsData);
    expect(queued).not.toContain(JWT);
    expect(queued).toContain("[REDACTED_TOKEN]");
    // non-secret parameters are kept for diagnostics
    expect(queued).toContain("the_user");
  });

  test("redactLogArguments keeps the arguments-object shape", () => {
    const out = (function (..._a: any[]) {
      // eslint-disable-next-line prefer-rest-params
      return redactLogArguments([arguments]);
    })("plain", JWT);
    expect(out[0]).toEqual({ 0: "plain", 1: "[REDACTED_TOKEN]" });
  });

  test("LoginToBackend does not queue the password in the package log (outcome)", async () => {
    const { LoginToBackend } = require("../src/Api/Login");
    const { Logger: RealLogger } = require("../src/app"); // the instance Login.ts actually uses
    RealLogger.logPackageActivationStatus = true;
    (RealLogger as any).packageLogsData = [];
    const seen: any[] = [];
    const spy = jest.spyOn(RealLogger, "formatLogData").mockImplementation((...a: any[]) => { seen.push(a); return {}; });
    const PASSWORD = "S3ntinel-Pa55word!";
    global.fetch = jest.fn(async () => ({ ok: false, status: 401, json: async () => ({ message: "bad" }) })) as any;
    try { await LoginToBackend("user@example.com", PASSWORD, "app"); } catch { /* error path is fine */ }
    spy.mockRestore();
    const queued = JSON.stringify(seen);
    expect(queued).toContain("LoginToBackend");
    expect(queued).toContain("user@example.com");
    expect(queued).not.toContain(PASSWORD);
    RealLogger.logPackageActivationStatus = false;
  });
});
