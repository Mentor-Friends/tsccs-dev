import { BaseUrl, Logger } from "../../app";
import { TokenStorage } from "../../DataStructures/Security/TokenStorage";

export function LogEvent(EventName:string, EventDescription:string, event:any){
        const sessionId = TokenStorage.sessionId || 'unknown';
        const newUrl =  location.href;
        const urlChange = {
        url: newUrl,
        requestFrom: BaseUrl.BASE_APPLICATION,
        sessionId: sessionId,
        description: EventDescription
        }
        Logger.logApplication("USER_EVENT", EventName, urlChange)
}