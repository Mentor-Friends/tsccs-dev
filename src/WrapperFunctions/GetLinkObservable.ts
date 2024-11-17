import { Concept, Connection, ConnectionData, GetAllConnectionsOfCompositionBulk, GetCompositionWithIdAndDateFromMemory, GetConceptByCharacterAndType, GetConnectionBulk, GetConnectionOfTheConcept, GetTheConcept } from "../app";
import { DATAID, DATAIDDATE, JUSTDATA, NORMAL } from "../Constants/FormatConstants";
import { GetComposition, GetCompositionFromMemory, GetCompositionWithIdFromMemory } from "../Services/GetComposition";
import { DependencyObserver } from "./DepenedencyObserver";

/**
 * This is a class that will give you the observable for the links from a certain concept.
 */
export class GetLinkObservable extends DependencyObserver
{
    linker:string;
    inpage: number;
    page: number;
    connections: Connection[] = [];
    data: any = [];
    /**
     * 
     * @param id this is the id whose links need to be found
     * @param linker this is the type connection that is connected to the mainConcept(id)
     * @param inpage number of outputs that has to be displayed
     * @param page the page which needs to be displayed as per the inpage parameter
     * @param format the format in which the output should be displayed (NORMAL, DATAID,JUSTDATA,DATAIDDATE)
     */
    constructor(id: number, linker:string, inpage: number, page: number, format: number){
        super();
        this.mainConcept = id;
        this.linker = linker;
        this.inpage = inpage;
        this.page = page;
        this.format = format;
    }

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

    async build(){

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

/**
 * 
 * @param id this is the id whose links need to be found
 * @param linker this is the type connection that is connected to the mainConcept(id)
 * @param inpage number of outputs that has to be displayed
 * @param page the page which needs to be displayed as per the inpage parameter
 * @param format the format in which the output should be displayed (NORMAL, DATAID,JUSTDATA,DATAIDDATE)
 */
export function GetLinkListener(id:number, linker:string, inpage: number, page: number, format:number = NORMAL){
    return new GetLinkObservable(id, linker, inpage, page, format);
}