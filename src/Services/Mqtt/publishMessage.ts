import { BaseUrl } from "../../DataStructures/BaseUrl";

export function publishMessage(topic:string, message: any){
        if(BaseUrl.MQTT_CONNECTION){
                BaseUrl.MQTT_CONNECTION.publish(topic, message);
        }
        
}