import { Concept, Connection, GetAllConnectionsOfCompositionBulk, GetCompositionWithIdAndDateFromMemory, GetConceptByCharacterAndType, GetConnectionOfTheConcept, GetTheConcept } from "../app";
import { DependencyObserver } from "./DepenedencyObserver";

export class GetLinkObservable extends DependencyObserver
{
    linker:string;
    inpage: number;
    page: number;
    connections: Connection[] = [];
    output: any = [];
    constructor(id: number, linker:string, inpage: number, page: number){
        super();
        this.mainConcept = id;
        this.linker = linker;
        this.inpage = inpage;
        this.page = page;
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
        for(var i=0; i<this.connections.length; i++){
            let toConceptId = this.connections[i].toTheConceptId;
            let toConcept = await GetTheConcept(toConceptId);
            let newComposition = await GetCompositionWithIdAndDateFromMemory(toConcept.id);
            this.output.push(newComposition);
          }
        return  this.output;
    }


}

export function GetLinkListener(id:number, linker:string, inpage: number, page: number){
    return new GetLinkObservable(id, linker, inpage, page);
}