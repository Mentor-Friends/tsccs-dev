export class TheTexts{
    id: number = 0;
    userId: number;
    data: string;
    securityId: number;
    securityUserId: number;
    accessId: number;
    accessUserId: number;
    sessionId: number;
    sessionUserId: number;
    entryTimestamp: string;
    isNew: boolean;

    constructor(userId:number, data:string, securityId: number, securityUserId: number, accessId:number, accessUserId: number, 
    sessionId: number, sessionUserId: number, entryTimestamp: string, isNew: boolean){
        this.userId = userId;
        this.data = data;
        this.securityId = securityId; 
        this.securityUserId = securityUserId;
        this.accessId = accessId;
        this.accessUserId = accessUserId;
        this.sessionId = sessionId;
        this.sessionUserId = sessionUserId;
        this.entryTimestamp = entryTimestamp;
        this.isNew = isNew;
    }

    



}