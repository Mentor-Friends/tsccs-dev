import { SettingData } from "../DataStructures/SettingData";
export declare function openDatabase(databaseName: string): void;
export declare function storeToDatabase(databaseName: string, object: any): void;
export declare function getFromDatabase(databaseName: string, id: number): void;
export declare function GetStatsFromDatabase(): Promise<unknown>;
export declare function AiUpdateFlag(object: SettingData): void;
export declare function getFromDatabaseWithType(databaseName: string, type: string, id: number): Promise<unknown>;
export declare function getFromDatabaseWithTypeOld(databaseName: string): Promise<unknown>;
export declare function removeFromDatabase(databaseName: string, id: number): void;
