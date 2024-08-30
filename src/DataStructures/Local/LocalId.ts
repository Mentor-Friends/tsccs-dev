import { storeToDatabase, UpdateToDatabase } from "../../Database/indexdblocal";
import { GetLastUpdatedIds } from "../../Services/Local/CreateLocalBinaryTreeFromData";

export class LocalId{
    static localId: number;
    static localConnectionId: number;

    static ReservedLocalId: number[] = [];
    static ReservedConnectionId:number[] = [];

    static  AddConceptId(id:any){
        this.localId = id.value;
        UpdateToDatabase("localid", id);
    }




    static getConceptId(): number{

        if(this.localId){

            if(this.ReservedLocalId.length < 5){
                let finalLocalId = this.localId;
                for(let j =1 ; j< 10; j++){
                    let localId = this.localId - j;
                    this.ReservedLocalId.push(localId);
                    finalLocalId = localId;
                }
                this.AddConceptId({"id":0, "value": finalLocalId})
                let id = this.ReservedLocalId[0];
                this.ReservedLocalId.shift();
                return id;

            }
            else{
                let id = this.ReservedLocalId[0];
                this.ReservedLocalId.shift();
                return id;
            }
        }
        else{
            GetLastUpdatedIds();
            return -Math.floor(Math.random() * 100000000);
        }

    }

    static AddConnectionId(id: any){
        this.localConnectionId  = id.value;
        UpdateToDatabase("localid", id);
    }

    static getConnectionId(): number{
        if(this.localConnectionId){
            if(this.ReservedConnectionId.length < 5){
                let finalLocalId = this.localId;
                for(let j =1 ; j< 10; j++){
                    let localId = this.localId - j;
                    
                    this.ReservedConnectionId.push(localId);
                    finalLocalId = localId;
                }
                this.AddConnectionId({"id":1, "value": finalLocalId})
                let id = this.ReservedConnectionId[0];
                this.ReservedConnectionId.shift();
                return id;

            }
            else{
                let id = this.ReservedConnectionId[0];
                this.ReservedConnectionId.shift();

                return id;
            }
        }
        else{
            GetLastUpdatedIds();
            return -Math.floor(Math.random() * 100000000);
        }

    }
}