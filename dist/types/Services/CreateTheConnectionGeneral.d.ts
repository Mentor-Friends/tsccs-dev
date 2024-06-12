import { Connection } from "../DataStructures/Connection";
export declare function CreateTheConnectionGeneral(ofTheConceptId: number, ofTheConceptUserId: number, toTheConceptId: number, toTheConceptUserId: number, typeId: number, sessionInformationId: number, sessionInformationUserId: number, orderId?: number, accessId?: number): Promise<Connection>;
