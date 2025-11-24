export  class Environments{
    public static environments: Record<string, any> = {};


    public static getValue(key: string): any {
        if(key in this.environments){
            let output: any = this.environments[key];
            return output;
        }
        else{
            return null;
        }
    }

    public static setValue(key:string, value:any){
        this.environments[key] = value;
        return this;
    }
}