import { SettingData } from "../DataStructures/SettingData";
export declare class IndexDb {
    static db: IDBDatabase;
}
export declare function openDatabase(databaseName: string): Promise<unknown>;
export declare function storeToDatabase(databaseName: string, object: any): void;
export declare function GetStatsFromDatabase(): Promise<unknown>;
export declare function AiUpdateFlag(object: SettingData): void;
export declare function getFromDatabaseWithType(databaseName: string, type: string, id: number): Promise<unknown>;
export declare function getFromDatabaseWithTypeOld(databaseName: string): Promise<unknown>;
export declare function removeFromDatabase(databaseName: string, id: number): void;
