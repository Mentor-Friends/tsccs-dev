import { GetReservedConnectionIds } from "../Api/GetReservedConnectionIds";
import { GetReservedIds } from "../Api/GetReservedIds";

export class ReservedIds{
    static  ids:number[] = [];

     static async getId(){
        if(this.ids.length < 10){
            console.time('Reserved Concept Fetch Time')
            var ids =  await GetReservedIds();
            console.timeEnd('Reserved Concept Fetch Time')
        }
        var id = this.ids[0];
        this.ids.shift();
        return id;

    }

    static AddId(id:number){
        if(!this.ids.includes(id)){
            this.ids.push(id);
        }
    }
}

export class ReservedConnectionIds{
    static connectionIds: number[] = [];
    static async getId(){
        if(this.connectionIds.length < 10){
            console.time('Reserved Connection Fetch Time')
            var connectionIds =  await GetReservedConnectionIds();
            console.timeEnd('Reserved Connection Fetch Time')
        }
        var id = this.connectionIds[0];
        this.connectionIds.shift();
        return id;

    }

    static AddId(id:number){
        if(!this.connectionIds.includes(id)){
            this.connectionIds.push(id);
        }
    }
}