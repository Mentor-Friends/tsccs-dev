import { GetReservedIds } from "../Api/GetReservedIds";

export class ReservedIds{
    static  ids:number[] = [];

     static async getId(){
        if(this.ids.length < 5){
            var ids =  await GetReservedIds();
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