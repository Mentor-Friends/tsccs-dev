export class TokenStorage{
    static BearerAccessToken:string = "";
    static sessionId = 998;

    static setSession(sessionId:any){
        if(sessionId){
            TokenStorage.sessionId = sessionId;
        }
    }
}