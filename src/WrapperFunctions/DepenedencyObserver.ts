import { CompositionNode, ConnectionData } from "../app";
import { NORMAL } from "../Constants/FormatConstants";

/**
 * This is the class that helps us observe anything that the function is doing
 * This wrapper will allow all the concepts and connections to be tracked inside of the called function
 * This function helps us manage state using the concept connection system.
 */
export class DependencyObserver{
    subscribers: any[] = []; // this is the list of subscribers that are added to this observer.
    mainConcept: number = 0;
    compositionIds: number[] = [];
    conceptIds: number[] =[];
    internalConnections: number[] = [];
    reverse: number[] = [];
    linkers: number[] = [];
    dependency: number[] = [];
    isDataLoaded: boolean = false; // checks to see if the data has been loaded to the widget/ function
    isUpdating: boolean = false; // this flag helps us check if the state is being updated while the connection updates.
    data: any;  // this is the actual data that needs to be returned.
    fetched: boolean = false;
    format: number = NORMAL;

    /**
     * This function will be called when there is a need to listen to a certain type of concept that will update
     *  the ui.
     * @param id this is the type id which needs to be tracked
     */
    listenToEventType(id: number): void {
        window.addEventListener(`${id}`, (event) => {
            if(!this.isUpdating){
                this.isUpdating = true;
                let that = this;
                
                setTimeout( async function(){
                    console.log("listen to event type", id);
                    let myEvent = event as CustomEvent;
                    if(!that.compositionIds.includes(myEvent?.detail)){
                        that.compositionIds.unshift(myEvent?.detail);
                        that.listenToEvent(myEvent?.detail);

                        let newId = myEvent?.detail;
                        let newConnection = await ConnectionData.GetConnectionByOfTheConceptAndType(newId, newId);
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
                                 if(!that.conceptIds.includes(conn.toTheConceptId)){
                                     that.conceptIds.push(conn.toTheConceptId);
                                 }
                                 if(!that.compositionIds.includes(conn.ofTheConceptId)){
                                     that.compositionIds.push(conn.ofTheConceptId);
                                 }

                             });
                         

                         }
                    }
                    that.isUpdating = false;
                    await that.bind();
                    that.notify();


                }, 200);
            }
            else{
                console.log("rejected this listenToEventType",id);
            }

        });
    }

    /**
     * This is the of the concept id that needs to be listened . If this is called. All the connections that are
     * created with of the concepts id with this passed id then the event is fired.
     * 
     * @param id Of the concept id that needs to be listened.
     */
    listenToEvent(id: number) {
        window.addEventListener(`${id}`, (event) => {
            if(!this.isUpdating){
                this.isUpdating = true;
                let that = this;

                setTimeout( async function(){
                    console.log("listen to event type 2 ", id);
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
                                    if(!that.conceptIds.includes(conn.toTheConceptId)){
                                        that.conceptIds.push(conn.toTheConceptId);
                                    }
                                    if(!that.compositionIds.includes(conn.ofTheConceptId)){
                                        that.compositionIds.push(conn.ofTheConceptId);
                                    }

                                });
                            

                    }
                    that.isUpdating = false;
                    await that.bind();
                    that.notify();


                }, 200);
            }
            else{
                console.log("rejected this listen event", id);
            }

        });
    }


        /**
     * This is the of the concept id that needs to be listened . If this is called. All the connections that are
     * created with of the concepts id with this passed id then the event is fired.
     * 
     * @param id Of the concept id that needs to be listened.
     */
        listenToEventConnectionType(id: number, connectionType: number) {
            window.addEventListener(`${id}`, (event) => {
                if(!this.isUpdating){
                    this.isUpdating = true;
                    let that = this;
    
                    setTimeout( async function(){
                        console.log("listen to connection type", id);
                        let newConnection = await ConnectionData.GetConnectionByOfTheConceptAndType(id, id);
                        for(let i=0 ;i< newConnection.length; i++){
                            
                            if(newConnection.typeId == connectionType){
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
                                    if(!that.conceptIds.includes(conn.toTheConceptId)){
                                        that.conceptIds.push(conn.toTheConceptId);
                                    }
                                    if(!that.compositionIds.includes(conn.ofTheConceptId)){
                                        that.compositionIds.push(conn.ofTheConceptId);
                                    }

                                });
                        }

                                
    
                        }
                        that.isUpdating = false;
                        await that.bind();
                        that.notify();
    
    
                    }, 200);
                }
                else{
                    console.log("rejected this connection type", id, connectionType);
                }
    
            });
        }


    /**
     * This function will bind the actual data to the widget or the function.
     */
    async bind(){
        console.log("this is the old execute data");
    }

    /**
     * This function tries to fetch the data again from the backend. This can be useful if your data parameters are changed
     * This is helpful in re-querying mechanism like pagination.
     */
    async update(){
        this.isDataLoaded = false;
        await this.bind();
        this.notify();
    }

    /**
     * 
     * @param callback the function that needs to be called with the data.
     * @returns returns the callback with this data as the state.
     */
    async subscribe(callback: any) {
        this.subscribers.push(callback);
            console.log('again executing data');
          await this.bind();
          return callback(this.data, this);
      }


      /**
       * 
       * @param callback function that you need to remove from the subscribers list.
       * @returns 
       */
      unsubscribe(callback: any){
        this.subscribers.filter(fn=>fn!= callback);
        return this.subscribers.length;
      }


      /**
       * This function will call all the subscribers that are registered in this wrapper.
       */
    notify() {
        console.log('notifiers', this.subscribers)
        this.subscribers.map(subscriber => {
            console.log('notify')

            subscriber(this.data, this)
        });

      }

}