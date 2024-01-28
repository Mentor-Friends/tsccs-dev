import { Concept } from "../DataStructures/Concept";
export default function CreateTheConcept(referent: string, userId: number, categoryId: number, categoryUserId: number, typeId: number, typeUserId: number, referentId: number, referentUserId: number, securityId: number, securityUserId: number, accessId: number, accessUserId: number, sessionInformationId: number, sessionInformationUserId: number): Promise<Concept>;
export declare function CreateTheConceptTemporary(referent: string, userId: number, categoryId: number, categoryUserId: number, typeId: number, typeUserId: number, referentId: number, referentUserId: number, securityId: number, securityUserId: number, accessId: number, accessUserId: number, sessionInformationId: number, sessionInformationUserId: number): Promise<Concept>;
export declare function CreateTheConceptImmediate(referent: string, userId: number, categoryId: number, categoryUserId: number, typeId: number, typeUserId: number, referentId: number, referentUserId: number, securityId: number, securityUserId: number, accessId: number, accessUserId: number, sessionInformationId: number, sessionInformationUserId: number): Promise<Concept>;
