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
    /** Map of concept IDs to their event handlers (string keys to support composite keys) */
    eventHandlers: { [key: string]: (event: Event) => void } = {};
    /** Map of handler keys to actual browser event names. */
    private eventNames: { [key: string]: string } = {};
    /** Whether this observer has been disposed. */
    protected isDisposed: boolean = false;

    /**
     * Registers a window listener and tracks enough metadata to remove it later.
     * The key identifies the logical subscription; eventName is the CustomEvent name.
     */
    protected addTrackedEventListener(key: string | number, eventName: string | number, handler: (event: Event) => void) {
        const listenerKey = `${key}`;
        if (this.eventHandlers[listenerKey]) return;

        const windowEventName = `${eventName}`;
        this.eventHandlers[listenerKey] = handler;
        this.eventNames[listenerKey] = windowEventName;
        window.addEventListener(windowEventName, handler);
    }

    /**
     * Removes a previously tracked window listener by its logical key.
     */
    protected removeTrackedEventListener(key: string | number) {
        const listenerKey = `${key}`;
        const handler = this.eventHandlers[listenerKey];
        if (!handler) return;

        window.removeEventListener(this.eventNames[listenerKey] ?? listenerKey, handler);
        delete this.eventHandlers[listenerKey];
        delete this.eventNames[listenerKey];
    }

    /**
     * Hook for subclasses that maintain additional subscriptions.
     */
    protected onDispose() {}

    /**
     * Removes all listeners owned by this observer.
     */
    dispose() {
        for (const key of Object.keys(this.eventHandlers)) {
            this.removeTrackedEventListener(key);
        }
        this.isDataLoaded = false;
        this.isDisposed = true;
        this.onDispose();
    }

    /**
     * Listens to changes for a specific concept type and updates subscribers when new concepts of that type are created.
     * @param id - The type concept ID to track
     */
    listenToEventType(id: number): void {
        const eventKey = `type:${id}`;
        if (this.eventHandlers[eventKey]) return; // already added


        const typeHandler = async(event:Event) => {
            if(!this.isUpdating){
                this.isUpdating = true;
                let that = this;

                setTimeout( async function(){
                    try {
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
                    } catch (err) {
                        console.error('Error in typeHandler event listener:', err);
                        that.isUpdating = false;
                        throw err;
                    }
                }, 200);
            }
            else{
                //console.log("rejected this", id);
            }
        }
        // console.log("added listener", id);
        this.addTrackedEventListener(eventKey, id, typeHandler);
    }

    /**
     * Listens to connection changes for a specific concept and updates subscribers when connections are modified.
     * @param id - The concept ID to track
     */
    listenToEvent(id: number) {
        const eventKey = `concept:${id}`;
        if (this.eventHandlers[eventKey]) return; // already added

        const handler = async(event: Event) => {
            if(!this.isUpdating){
                this.isUpdating = true;
                let that = this;

                setTimeout( async function(){
                    try {
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
                    } catch (err) {
                        console.error('Error in event listener for concept', id, ':', err);
                        that.isUpdating = false;
                        throw err;
                    }
                }, 200);
            }
            else{
               // console.log("rejected this", id);
            }
        };
        this.addTrackedEventListener(eventKey, id, handler);
    }

    /**
     * Removes an event listener for a specific concept ID.
     * @param id - The concept ID to stop tracking
     */
    removeListenToEvent(id: number) {
        this.removeTrackedEventListener(`concept:${id}`);
        this.removeTrackedEventListener(id);
    }



    /**
     * Listens to connection changes filtered by connection type for a specific concept.
     * @param id - The concept ID to track
     * @param connectionType - The connection type ID to filter by
     */
    listenToEventConnectionType(id: number, connectionType: number) {
        const key = `concept:${id}:type:${connectionType}`;
        if (this.eventHandlers[key]) return; // already added

        const handler = async (event: Event) => {
            if(!this.isUpdating){
                this.isUpdating = true;
                let that = this;

                setTimeout( async function(){
                    try {
                        let newConnection = await ConnectionData.GetConnectionByOfTheConceptAndType(id, id);
                        for(let i=0 ;i< newConnection.length; i++){

                            if(newConnection[i].typeId == connectionType){
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
                    } catch (err) {
                        console.error('Error in connectionType handler:', err);
                        that.isUpdating = false;
                        throw err;
                    }
                }, 200);
            }
            else{
               // console.log("rejected this");
            }
        };

        this.addTrackedEventListener(key, id, handler);
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
     * @param errorCallback - Optional function to call when errors occur
     * @returns Result of calling the callback with current data
     */
    subscribe(callback: any, errorCallback?: (error: Error) => void) {
        this.isDisposed = false;
        if (this.subscribers.length === 0 && Object.keys(this.eventHandlers).length === 0) {
            this.isDataLoaded = false;
        }
        this.subscribers.push(callback);
        const unsubscribeFn = () => this.unsubscribe(callback);
        const promise: any = this.bind().then(async () => {
            await callback(this.data, this);
            return { unsubscribe: unsubscribeFn };
        }).catch((err) => {
            console.error('Error in subscribe:', err);
            if (errorCallback) {
                errorCallback(err as Error);
            }
            throw err;
        });
        // Attach unsubscribe directly on the promise for sync access
        promise.unsubscribe = unsubscribeFn;
        return promise;
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
        this.subscribers = this.subscribers.filter(fn=>fn!= callback);
        if (this.subscribers.length === 0) {
            this.dispose();
        }
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
