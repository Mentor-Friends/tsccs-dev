/**
 * Observable base class implementing the Observer pattern for reactive widgets.
 *
 * Provides data change notification system allowing subscribers to react to state updates.
 */
export class BaseObserver{
    /** Widget data that can be observed for changes */
    data: any;

    /** Flag to enable development mode features */
    inDevelopment:boolean = false;

    /** Array of callback functions subscribed to data changes */
        subscribers: any = [];


    /**
    * Notifies all subscribers when data changes.
    *
    * @param passedData - Optional data to pass to subscribers. Uses this.data if not provided.
    */
    notify(passedData:any=null){
        this.subscribers.map((subscriber: any) => {
            if(passedData){
                subscriber(passedData);
            }
            else{
                subscriber(this.data);
            }
        });
    }


    /**
     * Registers a callback function to be invoked on data changes.
     *
     * @param callback - Function to execute when data changes
     */
    dataChange(callback: any){
        this.subscribers.push(callback);
       // return callback(this.data);
      }
}