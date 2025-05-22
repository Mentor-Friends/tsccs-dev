export class TokenStorage{
    static BearerAccessToken:string = "";
    static sessionId = 998;
}

// export class TokenStorage {
//     private static _accessToken: string = "";
//     private static _sessionId: number = 998;
  
//     static set BearerAccessToken(token: string) {
//       this._accessToken = token;
//       localStorage.setItem("accessToken", token);
//     }
  
//     static get BearerAccessToken(): string {
//       if (this._accessToken) return this._accessToken;
  
//       const stored = localStorage.getItem("accessToken");
//       this._accessToken = stored || "";
//       return this._accessToken;
//     }
  
//     static set sessionId(id: number) {
//       this._sessionId = id;
//       localStorage.setItem("sessionId", id.toString());
//     }
  
//     static get sessionId(): number {
//       if (this._sessionId !== 998) return this._sessionId;
  
//       const stored = localStorage.getItem("sessionId");
//       this._sessionId = stored ? parseInt(stored) : 998;
//       return this._sessionId;
//     }
  
//     static clear() {
//       this._accessToken = "";
//       this._sessionId = 998;
//       localStorage.removeItem("accessToken");
//       localStorage.removeItem("sessionId");
//     }
//   }
  