export class SettingData{

    public id:number = 1;
    public isOnlineSync: boolean = false;

    constructor(isOnlineSync:boolean){
        this.isOnlineSync = isOnlineSync;
    }
}