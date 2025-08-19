export class TokenStorage{
    static BearerAccessToken:string = "";
    static sessionId = 998;
    
    static setSession(sessionId:any){
        console.log("this is setting the session", sessionId);
        if(sessionId){
            TokenStorage.sessionId = sessionId;
        }
        console.log("this is setting the session after", TokenStorage.sessionId);
    }
}