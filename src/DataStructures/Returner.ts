export class Returner{
    id: number;
    userId: number;
    referentId: number;
    isNew: boolean;

    constructor(id:number, userId:number, referentId: number, isNew:boolean){
        this.id = id;
        this.userId = userId;
        this.referentId = referentId;
        this.isNew = isNew;
    }
}