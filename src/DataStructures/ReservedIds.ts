import { GetReservedConnectionIds } from "../Api/GetReservedConnectionIds";
import { GetReservedIds } from "../Api/GetReservedIds";

export class ReservedIds{
    static  ids:number[] = [];

     static async getId(){
        let startTime = new Date().getTime();
        if(this.ids.length < 10){
            var ids =  await GetReservedIds();
        }
        var id = this.ids[0];
        this.ids.shift();
        var end = new Date().getTime();
        var time = end - startTime;
        console.log('Execution time for concept: ' + time);
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
        let startTime = new Date().getTime();
        if(this.connectionIds.length < 10){
            var connectionIds =  await GetReservedConnectionIds();
        }
        var id = this.connectionIds[0];
        this.connectionIds.shift();
        var end = new Date().getTime();
        var time = end - startTime;
        console.log('Execution time for connection: ' + time);
        return id;

    }

    static AddId(id:number){
        if(!this.connectionIds.includes(id)){
            this.connectionIds.push(id);
        }
    }
}