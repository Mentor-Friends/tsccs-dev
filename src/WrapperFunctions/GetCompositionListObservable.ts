import { GetAllConceptsByType } from "../Api/GetAllConceptsByType";
import { ConceptsData, Connection, ConnectionData, DATAID, GetAllConnectionsOfCompositionBulk, GetComposition, GetCompositionList, GetConceptByCharacter, JUSTDATA, NORMAL } from "../app";
import { GetCompositionById, GetCompositionFromMemory, GetCompositionFromMemoryNormal, GetCompositionWithIdFromMemory, RecursiveFetchBuildLayer } from "../Services/GetComposition";
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
    constructor(compositionName:string, userId: number, inpage: number , page: number, format: number){
        super();
        this.compositionName = compositionName;
        this.userId = userId;
        this.inpage = inpage;
        this.page = page;
        this.format = format;
    }



    async bind(){
        if(!this.isDataLoaded){
            console.log("again data loading mechanism");
            var concept = await GetConceptByCharacter(this.compositionName);
        
            if(concept){
                await GetAllConceptsByType(this.compositionName, this.userId);
                console.log("getting the user data", concept.id, this.userId);
                let conceptList = await ConceptsData.GetConceptsByTypeIdAndUser(concept.id,this.userId);
                console.log("this is the concept list", conceptList);
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
                console.log("list listen", this.compositionIds[i]);
                this.listenToEvent(this.compositionIds[i]);
            }
        }
        let mydata  =  await this.build();
        return mydata;
    }

    async build(){
        this.data = [];
        console.log("this is building the data list", this.startPage, this.inpage);
        if(this.format == JUSTDATA){
            for(let i=this.startPage; i< this.startPage + this.inpage; i++){
                if(this.compositionIds[i]){
          
                   let compositionJson= await GetCompositionFromMemory(this.compositionIds[i]);
                   this.data.push(compositionJson);
                }
              }
        }
        else if(this.format == DATAID){
            for(let i=this.startPage; i< this.startPage + this.inpage; i++){
                if(this.compositionIds[i]){
          
                    let compositionJson= await GetCompositionWithIdFromMemory(this.compositionIds[i]);
                   this.data.push(compositionJson);
                }
              }
        }
        else if(this.format == NORMAL){
            for(let i=this.startPage; i< this.startPage + this.inpage; i++){
                if(this.compositionIds[i]){
                    let compositionJson= await GetCompositionFromMemoryNormal(this.compositionIds[i]);
                   this.data.push(compositionJson);
                }
              }
        }
        else{
            for(let i=this.startPage; i< this.startPage + this.inpage; i++){
                if(this.compositionIds[i]){
          
                    let compositionJson= await GetCompositionFromMemory(this.compositionIds[i]);

                   this.data.push(compositionJson);
                }
              }
        }

        return this.data;
    }
}

/**
 * This function will give you the list of the concepts by composition name with a listener to any data change.
 */
export function GetCompositionListListener(compositionName:string, userId: number, inpage: number, page: number, format:number = JUSTDATA){

    
    return  new GetCompositionListObservable(compositionName, userId, inpage, page,format);
    
    // Add Log
    // Logger.logInfo(
    //     startTime, 
    //     userId,
    //     "read",
    //     "Unknown",
    //     "Unknown",
    //     200,
    //     compositionResult,
    //     "GetCompositionListListener",
    //     ['compositionName', 'userId', 'inpage', 'page', 'format'],
    //     "UnknownUserAgent",
    //     []
    // );

}