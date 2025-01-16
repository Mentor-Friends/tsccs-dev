import { Connection, ConnectionData, DATAID, GetConceptBulk, GetConceptByCharacter, NORMAL, SearchQuery, SearchStructure, SearchWithTypeAndLinker, SearchWithTypeAndLinkerApi } from "../app";
import { ConnectionOfNode } from "../DataStructures/ConnectionBinaryTree/ConnectionOfNode";
import { TokenStorage } from "../DataStructures/Security/TokenStorage";
import { formatDataArrayDataId, formatDataArrayNormal } from "../Services/Search/SearchWithTypeAndLinker";
import { DependencyObserver } from "./DepenedencyObserver";

export class GetLinkListObservable extends DependencyObserver{
    searchQuery: SearchQuery[] = [];
    searchStructure: SearchStructure;
    format: number = DATAID;
    mainCompositionIds: number [] =[];
    searchCharacter = "";

    token: string = "";
    constructor(searchStructure:SearchStructure, searchQuery: SearchQuery[], token: string, format:number = DATAID){
        super();
        this.searchStructure = searchStructure;
        this.searchQuery = searchQuery;
        this.searchQuery[0].type  = searchStructure.composition;
        this.searchCharacter = searchStructure.composition;
        this.format = format;
        this.token = TokenStorage.BearerAccessToken;
    }

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
                        let myEvent = event as CustomEvent;
                        if(!that.mainCompositionIds.includes(myEvent?.detail)){
                            that.mainCompositionIds.unshift(myEvent?.detail);
                            that.conceptIds.push(myEvent?.detail);
                            that.listenToEvent(myEvent?.detail);
                            ConnectionData.GetConnectionsOfConcept(myEvent?.detail).then((connectionList: Connection[])=>{
                                for(let i=0;i < connectionList.length; i++){
                                    that.linkers.push(connectionList[i].id);
                                }
                            })
                        }
                        that.isUpdating = false;
                        await that.bind();
                        that.notify();
    
    
                    }, 200);
                }
                else{
                    console.log("rejected this");
                }
    
            });
        }


    async bind(){
        if(!this.isDataLoaded){

            this.isDataLoaded = true;
            var concept = await GetConceptByCharacter(this.searchCharacter);
            let result:any = await SearchWithTypeAndLinkerApi( this.searchStructure, this.searchQuery, this.token);
            this.conceptIds = result.compositionIds;
            this.internalConnections = result.internalConnections;
            this.linkers = result.linkers;
            this.reverse = result.reverse;
            this.mainCompositionIds = result.mainCompositionIds;
            this.listenToEventType(concept.id); 
            for(let i =0; i< this.mainCompositionIds.length; i++){
                this.listenToEvent(this.mainCompositionIds[i]);
            }

        }
        return await this.build();
    }


    async build(){

    await GetConceptBulk(this.conceptIds);

        if(this.format == DATAID){
            this.data = await formatDataArrayDataId(this.linkers, this.conceptIds, this.internalConnections, this.mainCompositionIds, this.reverse);
        }
        else{
            this.data = await formatDataArrayNormal(this.linkers, this.conceptIds, this.internalConnections,  this.mainCompositionIds, this.reverse );
        }
        return this.data
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
export function GetLinkListListener(searchStructure: SearchStructure, searchQuery: SearchQuery[], token: string, format:number = DATAID){
    return new GetLinkListObservable(searchStructure, searchQuery, token, format);
}