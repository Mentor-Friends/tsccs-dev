export declare class LocalIndexDb {
    static db: IDBDatabase;
}
export declare function openDatabase(databaseName: string): Promise<unknown>;
export declare function storeToDatabase(databaseName: string, object: any): void;
export declare function getAllFromLocalDb(databaseName: string): Promise<unknown>;
export declare function removeFromDatabase(databaseName: string, id: number): void;
