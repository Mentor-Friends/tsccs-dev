import { Concept, Connection, ConnectionData, GetAllConnectionsOfCompositionBulk, GetCompositionWithIdAndDateFromMemory, GetConceptByCharacterAndType, GetConnectionBulk, GetConnectionOfTheConcept, GetTheConcept } from "../app";
import { DATAID, DATAIDDATE, JUSTDATA, NORMAL } from "../Constants/FormatConstants";
import { GetComposition, GetCompositionFromMemory, GetCompositionWithIdFromMemory } from "../Services/GetComposition";
import { DependencyObserver } from "./DepenedencyObserver";

/**
 * Observable wrapper for retrieving linked concepts from a source concept with automatic updates.
 */
export class GetLinkObservable extends DependencyObserver
{
    /** The linker type name defining the relationship */
    linker:string;
    /** Number of items per page */
    inpage: number;
    /** Current page number */
    page: number;
    /** List of connection objects */
    connections: Connection[] = [];
    /** Array of linked composition data */
    data: any = [];

    /**
     * Creates a new link observable.
     * @param id - The source concept ID whose links to retrieve
     * @param linker - The linker type name defining the relationship
     * @param inpage - Number of items per page
     * @param page - Page number (1-indexed)
     * @param format - Output format (NORMAL, DATAID, JUSTDATA, DATAIDDATE)
     */
    constructor(id: number, linker:string, inpage: number, page: number, format: number){
        super();
        this.mainConcept = id;
        this.linker = linker;
        this.inpage = inpage;
        this.page = page;
        this.format = format;
    }

    /**
     * Fetches linked concepts and sets up change listeners.
     * @returns Array of linked composition data
     */
    async bind(){
        if(!this.isDataLoaded){
            let  concept:Concept = await GetTheConcept(this.mainConcept);
            let linkString: string = concept.type?.characterValue + "_s" + "_" + this.linker;
            let relatedConceptString = await GetConceptByCharacterAndType(linkString, 16);
            let relatedConcept = relatedConceptString as Concept;

            if(relatedConcept.id > 0){
              let connectionsString = await GetConnectionOfTheConcept(relatedConcept.id,concept.id, concept.userId,this.inpage, this.page);
               this.connections = connectionsString as Connection[];
              var prefetch :number[] = [];
              for(var i=0; i<this.connections.length; i++){
                prefetch.push(this.connections[i].toTheConceptId);
                this.linkers.push(this.connections[i].id)
                this.listenToEvent(this.connections[i].toTheConceptId);
              }
             // await GetAllConnectionsOfCompositionBulk(prefetch);
             await GetAllConnectionsOfCompositionBulk(prefetch);
            }
            this.isDataLoaded = true;
            this.listenToEvent(this.mainConcept);
        }
        return await this.build();
    }

    /**
     * Builds the array of linked compositions in the specified format.
     * @returns Array of formatted linked composition data
     */
    async build(){

        this.data = []
        this.connections = await GetConnectionBulk(this.linkers);
        for(var i=0; i<this.connections.length; i++){
            let toConceptId = this.connections[i].toTheConceptId;
            let toConcept = await GetTheConcept(toConceptId);
            console.log("this is the format", this.format);
            if(this.format == NORMAL){
                let newComposition = await GetCompositionWithIdFromMemory(toConcept.id);
                this.data.push(newComposition);

            }
            else if(this.format == JUSTDATA){
                let newComposition = await GetCompositionFromMemory(toConcept.id);
                this.data.push(newComposition);

            }
            else if(this.format == DATAIDDATE){
                let newComposition = await GetCompositionWithIdAndDateFromMemory(toConcept.id);
                this.data.push(newComposition);
            }
            else {
                let newComposition = await GetCompositionWithIdAndDateFromMemory(toConcept.id);
                this.data.push(newComposition);
            }
          }
        return  this.data;
    }


}

// class GetLinkServiceObservable
// {
//     mainConcept: number
//     linker:string;
//     inpage: number;
//     page: number;
//     format: number = NORMAL;
//     connections: Connection[] = [];
//     data: any = [];
//     subscribers: any[] = []

//     /**
//      * 
//      * @param id this is the id whose links need to be found
//      * @param linker this is the type connection that is connected to the mainConcept(id)
//      * @param inpage number of outputs that has to be displayed
//      * @param page the page which needs to be displayed as per the inpage parameter
//      * @param format the format in which the output should be displayed (NORMAL, DATAID,JUSTDATA,DATAIDDATE)
//      */
//     constructor(id: number, linker:string, inpage: number, page: number, format: number){
//         this.mainConcept = id;
//         this.linker = linker;
//         this.inpage = inpage;
//         this.page = page;
//         this.format = format;
//     }

//     async subscribe(callback: Function) {
//         this.subscribers.push(callback);
//         const listenerId = Date.now() + '-' + Math.floor(Math.random() * 99999999)
//         const listener = {
//             listenerId: listenerId,
//             callback: callback,
//             createdAt: Date.now()
//         }
//         subscribedListeners.push(listener)
//         console.log('listener', serviceWorker)
//         // const res: any = await sendMessage('GetLinkListener', {id: this.mainConcept, linker: this.linker, inpage: this.inpage, page: this.page, format: this.format, listener })
//         const res: any = await sendMessage('GetLinkListener', {id: this.mainConcept, linker: this.linker, inpage: this.inpage, page: this.page, format: this.format, listener: {
//             listenerId: listenerId,
//             createdAt: Date.now()
//         } })
//         return callback(res.data);
//     }
// }

/**
 * Creates an observable that tracks linked concepts and updates subscribers when links change.
 * @param id - The source concept ID whose links to retrieve
 * @param linker - The linker type name defining the relationship
 * @param inpage - Number of items per page
 * @param page - Page number (1-indexed)
 * @param format - Output format (NORMAL, DATAID, JUSTDATA, DATAIDDATE)
 * @returns Observable instance for the linked concepts
 *
 * @example
 * const observer = GetLinkListener(123, "Author", 10, 1, NORMAL);
 * observer.subscribe((linkedData) => console.log(linkedData));
 */
export function GetLinkListener(id:number, linker:string, inpage: number, page: number, format:number = NORMAL){
    return new GetLinkObservable(id, linker, inpage, page, format)
    // console.log("serviceworker", serviceWorker);
    // if (serviceWorker) {
    //   return new GetLinkServiceObservable(id, linker, inpage, page, format);
    // } else return new GetLinkObservable(id, linker, inpage, page, format);
}