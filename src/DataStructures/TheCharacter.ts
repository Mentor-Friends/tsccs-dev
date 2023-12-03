export class TheCharacter{
    id: number = 0;
    userId: number;
    data: string;
    securityId: number;
    securityUserId: number;
    accessId: number;
    accessUserId: number;
    sessionId: number;
    sessionUserId: number;
    isNew: boolean = false;

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
        this.isNew = isNew;
    }

    



}