import { SettingData } from "../DataStructures/SettingData";
export declare function openDatabase(databaseName: string): IDBDatabase;
export declare function storeToDatabase(databaseName: string, object: any): void;
export declare function GetStatsFromDatabase(): SettingData;
export declare function AiUpdateFlag(object: SettingData): void;
export declare function getFromDatabaseWithType(databaseName: string, type: string, id: number): Promise<void>;
export declare function getFromDatabaseWithTypeOld(databaseName: string): Promise<void>;
export declare function removeFromDatabase(databaseName: string, id: number): void;
export declare function getAllFromLocalDb(databaseName: string): Promise<void>;
