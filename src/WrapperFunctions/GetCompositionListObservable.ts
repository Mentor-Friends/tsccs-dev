import { GetAllConceptsByType } from "../Api/GetAllConceptsByType";
import { ConceptsData, Connection, ConnectionData, GetAllConnectionsOfCompositionBulk, GetComposition, GetCompositionList, GetConceptByCharacter } from "../app";
import { GetCompositionById, GetCompositionFromMemory, RecursiveFetchBuildLayer } from "../Services/GetComposition";
import { DependencyObserver } from "./DepenedencyObserver";
import { GetCompositionListener, GetCompositionObservable } from "./GetCompositionObservable";

/**
 * This wrapper will wrap the listing function and then allow users to return the list.
 */
export class GetCompositionListObservable extends DependencyObserver{
    compositionName: string;
    userId: number;
    inpage: number;
    page: number;
    data: any = [];
    startPage:number = 0;
    constructor(compositionName:string, userId: number, inpage: number , page: number){
        super();
        this.compositionName = compositionName;
        this.userId = userId;
        this.inpage = inpage;
        this.page = page;
    }



    async bind(){
        if(!this.isDataLoaded){
            console.log("again data loading mechanism");
            var concept = await GetConceptByCharacter(this.compositionName);
        
            if(concept){
                await GetAllConceptsByType(this.compositionName, this.userId);
                let conceptList = await ConceptsData.GetConceptsByTypeIdAndUser(concept.id,this.userId);
                var startPage = this.inpage * (this.page - 1);
                for(var i=startPage; i< startPage + this.inpage; i++){
                    if(conceptList[i]){
                        
                        this.compositionIds.push(conceptList[i].id);
                    }
                }
            }
            await GetAllConnectionsOfCompositionBulk(this.compositionIds);

            this.isDataLoaded = true;
            this.listenToEventType(concept.id);
            for(let i= 0 ; i< this.compositionIds.length; i++){
                this.listenToEvent(this.compositionIds[i]);
            }
        }
        return await this.build();
    }

    async build(){
        this.data = [];
        for(var i=this.startPage; i< this.startPage + this.inpage; i++){
          if(this.compositionIds[i]){
    
             var compositionJson= await GetCompositionFromMemory(this.compositionIds[i]);
             this.data.push(compositionJson);
          }
        }
        console.log("this is the list", this.data);
        return this.data;
    }
}

/**
 * This function will give you the list of the concepts by composition name with a listener to any data change.
 */
export function GetCompositionListListener(compositionName:string, userId: number, inpage: number, page: number){
    return new GetCompositionListObservable(compositionName, userId, inpage, page);
}