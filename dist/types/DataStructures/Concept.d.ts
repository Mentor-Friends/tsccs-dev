export declare class Concept {
    x: number;
    y: number;
    id: number;
    userId: number;
    typeId: number;
    typeUserId: number;
    categoryId: number;
    categoryUserId: number;
    referentId: number;
    referentUserId: number;
    characterValue: string;
    securityId: number;
    securityUserId: number;
    accessId: number;
    accessUserId: number;
    sessionId: number;
    sessionUserId: number;
    referent: number;
    type: Concept | null | void;
    isNew: boolean;
    isTemp: boolean;
    constructor(id: number, userId: number, typeId: number, typeUserId: number, categoryId: number, categoryUserId: number, referentId: number, referentUserId: number, characterValue: string, securityId: number, securityUserId: number, accessId: number, accessUserId: number, sessionId: number, sessionUserId: number, isNew?: boolean);
    getType(): void;
}
