import { UpdateToDatabase } from "../../Database/indexdblocal";
import { PopulateTheLocalConceptsToMemory, PopulateTheLocalConnectionToMemory } from "../../Services/Local/CreateLocalBinaryTreeFromData";

export class LocalId{
    static localId: number;
    static localConnectionId: number;

    static ReservedLocalId: number[] = [];
    static ReservedConnectionId:number[] = [];

    static  AddConceptId(id:any){
        this.localId = id.value;
        UpdateToDatabase("localid", id);
    }




    static async  getConceptId(): Promise<number>{
        try{
            if(this.localId){
                if(this.ReservedLocalId.length < 5){
                    await PopulateTheLocalConceptsToMemory().then(() => {
                    let finalLocalId = this.localId;
                    for(let j =1 ; j< 10; j++){
                        let localId = this.localId - j;
                        this.ReservedLocalId.push(localId);
                        finalLocalId = localId;
                    }
                    this.AddConceptId({"id":0, "value": finalLocalId})
    
                   }).catch((event)=> {
                        console.log("cannot get the id from indexdb");
                        return -Math.floor(Math.random() * 100000000);
                   });
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
               await PopulateTheLocalConceptsToMemory().then(() => {
                    let finalLocalId = this.localId;
                    for(let j =1 ; j< 10; j++){
                        let localId = this.localId - j;
                        this.ReservedLocalId.push(localId);
                        finalLocalId = localId;
                    }
                    this.AddConceptId({"id":0, "value": finalLocalId});
    
                   });
                   return this.getConceptId();
            }
    
        }
        catch(error){
            return -Math.floor(Math.random() * 100000000);
        }
        
    }

    static AddConnectionId(id: any){
        this.localConnectionId  = id.value;
        UpdateToDatabase("localid", id);
    }

    static async getConnectionId(): Promise<number>{
        try{
            if(this.localConnectionId){
                if(this.ReservedConnectionId.length < 5){
                    await PopulateTheLocalConnectionToMemory().then(()=> {
                        let finalLocalId = this.localConnectionId;
                        for(let j =1 ; j< 10; j++){
                            let localConId = this.localConnectionId - j;
                            
                            this.ReservedConnectionId.push(localConId);
                            finalLocalId = localConId;
                        }
                        this.AddConnectionId({"id":1, "value": finalLocalId})
                    }).catch((event)=> {
                        return -Math.floor(Math.random() * 100000000);
                    });
    
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
               await PopulateTheLocalConnectionToMemory().then(()=> {
                    let finalLocalId = this.localConnectionId;
                    for(let j =1 ; j< 10; j++){
                        let localConId = this.localConnectionId - j;
                        
                        this.ReservedConnectionId.push(localConId);
                        finalLocalId = localConId;
                    }
                    this.AddConnectionId({"id":1, "value": finalLocalId})
                });
                return this.getConnectionId();
            }
        }
        catch(error){
            return -Math.floor(Math.random() * 100000000);
        }
        

    }
}