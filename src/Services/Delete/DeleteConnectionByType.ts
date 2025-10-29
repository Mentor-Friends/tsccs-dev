import { GetAllLinkerConnectionsFromTheConcept } from "../../Api/GetAllLinkerConnectionsFromTheConcept";
import { DeleteConnectionById, GetConceptByTypeBulk } from "../../app";

/**
 * 
 * @param id the id of the concept whose connection needs to be returned
 * @param linkers the connection types whose connection id need to be found
 */
export async function DeleteConnectionByTypeBulk(id: number, linkers: string[]){
    let isDeleted: boolean = true;
    let externalConnections = await GetAllLinkerConnectionsFromTheConcept(id);
    let typeConceptList = await GetConceptByTypeBulk(linkers);
    let toDelete: number[] = [];
    for(let i=0; i<externalConnections.length; i++){
        for(let j=0; j<typeConceptList.length; j++){
            if(externalConnections[i].typeId == typeConceptList[j].id){
                toDelete.push(externalConnections[i].id);
            }
        }

    }

    for(let i=0; i<toDelete.length; i++){
      let deleted =   await DeleteConnectionById(toDelete[i]);
      isDeleted = isDeleted && deleted;
    }

    return isDeleted;

}


/**
 * 
 * @param id the id of the concept whose connection needs to be returned
 * @param linkers the connection types whose connection id need to be found
 * @returns list of ids of the connection
 */
export async function GetConnectionByTypeBulk(id: number, linkers:string[]){
    let externalConnections = await GetAllLinkerConnectionsFromTheConcept(id);
    let typeConceptList = await GetConceptByTypeBulk(linkers);
    let toDelete: number[] = [];
    for(let i=0; i<externalConnections.length; i++){
        for(let j=0; j<typeConceptList.length; j++){
            if(externalConnections[i].typeId == typeConceptList[j].id){
                toDelete.push(externalConnections[i].id);
            }
        }

    }
    return toDelete;

}
