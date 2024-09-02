import { ConnectionLine } from "./ConnectionLine";

export class ConnectionLineList{
    static drawList: ConnectionLine[] = [];

    static addNewConnectionLine(connectionLine: ConnectionLine){
        let exists = false;
        for(let i=0; i< this.drawList.length; i++){
            if(this.drawList[i].connection?.id == connectionLine.connection?.id){
                exists = true;
            }
            
        }
        if(!exists){
            this.drawList.push(connectionLine);
        }
    }

    static removeConnectionLine(connectionLine: ConnectionLine){
        for(let i=0 ;i<this.drawList.length;i++){
            if(this.drawList[i]?.id == connectionLine.id){
                this.drawList.splice(i,1);
            }
        }
    }
}