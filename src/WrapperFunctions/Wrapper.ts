import { ConnectionData } from "../app";

export class Wrapper{
    subscribers: any[] = [];
    mainConcept: number = 0;
    compositionIds: number[] = [];
    internalConnections: number[] = [];
    reverse: number[] = [];
    linkers: number[] = [];
    dependency: number[] = [];
    isDataLoaded: boolean = false;
    isUpdating: boolean = false;
    data: any;
    fetched: boolean = false;



    listenToEvent(id: number) {
        window.addEventListener(`${id}`, (event) => {
            if(!this.isUpdating){
                this.isUpdating = true;
                let that = this;

                setTimeout( async function(){
                    let newConnection = await ConnectionData.GetConnectionByOfTheConceptAndType(id, id);
                    for(let i=0 ;i< newConnection.length; i++){
                        
                               await ConnectionData.GetConnection(newConnection[i]).then((conn)=>{
                                    if(conn.typeId == that.mainConcept){
                                        if(!that.internalConnections.includes(conn.id)){
                                            that.internalConnections.push(conn.id);
                                        }
                                    }
                                    else{
                                        if(!that.linkers.includes(conn.id)){
                                            that.linkers.push(conn.id);
                                        }
                                        

                                    }
                                    if(!that.compositionIds.includes(conn.toTheConceptId)){
                                        that.compositionIds.push(conn.toTheConceptId);
                                    }

                                });
                            

                    }
                    that.isUpdating = false;
                    await that.executeData();
                    that.notify();


                }, 1000);
            }
            else{
                console.log("rejected this");
            }

        });
    }


    async executeData(){
        console.log("this is the old execute data");
    }

    async subscribe(callback: any) {
        this.subscribers.push(callback);
            console.log('again executing data');
          await this.executeData();
          return callback(this.data);
      }


    notify() {
        console.log('notifiers', this.subscribers)
        this.subscribers.map(subscriber => {
            console.log('notify')

            subscriber(this.data)
        });

      }

}