import { CompositionNode, ConnectionData } from "../app";
import { NORMAL } from "../Constants/FormatConstants";

/**
 * Base observable class that tracks concepts and connections for reactive state management.
 * Implements the observer pattern to notify subscribers when tracked data changes.
 */
export class DependencyObserver{
    /** List of subscriber callbacks */
    subscribers: any[] = [];
    /** Primary concept ID being observed */
    mainConcept: number = 0;
    /** List of composition IDs */
    compositionIds: number[] = [];
    /** List of concept IDs */
    conceptIds: number[] =[];
    /** List of internal connection IDs */
    internalConnections: number[] = [];
    /** List of reverse connection IDs */
    reverse: number[] = [];
    /** List of linker connection IDs */
    linkers: number[] = [];
    /** List of newly added IDs */
    newIds:number[] = [];
    /** List of dependency IDs */
    dependency: number[] = [];
    /** Whether initial data has been loaded */
    isDataLoaded: boolean = false;
    /** Whether an update is currently in progress */
    isUpdating: boolean = false;
    /** The observable data to be returned */
    data: any;
    /** Whether data has been fetched */
    fetched: boolean = false;
    /** Output format (NORMAL, DATAID, JUSTDATA, etc.) */
    format: number = NORMAL;
    /** Map of concept IDs to their event handlers */
    eventHandlers: { [key: number]: (event: Event) => void } = {};

    /**
     * Listens to changes for a specific concept type and updates subscribers when new concepts of that type are created.
     * @param id - The type concept ID to track
     */
    listenToEventType(id: number): void {
        if (this.eventHandlers[id]) return; // already added


        const typeHandler = async(event:Event) => {
            if(!this.isUpdating){
                this.isUpdating = true;
                let that = this;
                
                setTimeout( async function(){
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
                //console.log("rejected this", id);
            }
        }
        this.eventHandlers[id] = typeHandler;
       // console.log("added listener", id);
        window.addEventListener(`${id}`, typeHandler);
    }

    /**
     * Listens to connection changes for a specific concept and updates subscribers when connections are modified.
     * @param id - The concept ID to track
     */
    listenToEvent(id: number) {
        if (this.eventHandlers[id]) return; // already added

        const handler = async(event: Event) => {
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
                                    if(!that.conceptIds.includes(conn.toTheConceptId)){
                                        that.conceptIds.push(conn.toTheConceptId);
                                    }
                                    if(!that.compositionIds.includes(conn.ofTheConceptId)){
                                        that.compositionIds.push(conn.ofTheConceptId);
                                        if(!that.newIds.includes(conn.ofTheConceptId)){
                                            that.newIds.push(conn.ofTheConceptId);
                                        }
                                    }


                                });
                            

                    }
                    that.isUpdating = false;
                    await that.bind();
                    that.notify();


                }, 200);
            }
            else{
               // console.log("rejected this", id);
            }
        };
        this.eventHandlers[id] = handler;
        window.addEventListener(`${id}`,handler);
    }

    /**
     * Removes an event listener for a specific concept ID.
     * @param id - The concept ID to stop tracking
     */
    removeListenToEvent(id: number) {
        const handler = this.eventHandlers[id];
        if (handler) {
            window.removeEventListener(`${id}`, handler);
            delete this.eventHandlers[id];
        }
    }



    /**
     * Listens to connection changes filtered by connection type for a specific concept.
     * @param id - The concept ID to track
     * @param connectionType - The connection type ID to filter by
     */
    listenToEventConnectionType(id: number, connectionType: number) {
            window.addEventListener(`${id}`, (event) => {
                if(!this.isUpdating){
                    this.isUpdating = true;
                    let that = this;
    
                    setTimeout( async function(){
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
                   // console.log("rejected this");
                }
    
            });
        }


    /**
     * Binds and refreshes the observable data. Override in subclasses to implement specific data fetching logic.
     * @returns The bound data
     */
    async bind(){
        console.log("this is the old execute data");
    }

    /**
     * Executes the observable without subscribing. Override in subclasses for non-reactive data fetching.
     * @returns The executed data
     */
    async run(){
        console.log("this is non subscriber data");
    }

    /**
     * Forces a data refresh and notifies all subscribers.
     */
    async update(){
        this.isDataLoaded = false;
        await this.bind();
        this.notify();
    }

    /**
     * Subscribes a callback to receive data updates whenever tracked concepts/connections change.
     * @param callback - Function to call with (data, observer) when updates occur
     * @returns Result of calling the callback with current data
     */
    async subscribe(callback: any) {
        this.subscribers.push(callback);
          //  console.log('again executing data');
          await this.bind();
          return callback(this.data,this);
      }

    /**
     * Executes the observable once without subscribing to updates.
     * @returns The executed data
     */
    async execute() {
          return await this.run();
    }



    /**
     * Removes a callback from the subscriber list.
     * @param callback - The callback function to remove
     * @returns Number of remaining subscribers
     */
    unsubscribe(callback: any){
        this.subscribers.filter(fn=>fn!= callback);
        return this.subscribers.length;
    }


    /**
     * Notifies all subscribers with the current data.
     */
    notify() {
        //console.log('notifiers', this.subscribers)
        this.subscribers.map(subscriber => {
           // console.log('notify')

            subscriber(this.data,this)
        });

      }

}