import { Connection, ConnectionData, CreateTheConnectionLocal, DeleteConnectionById, GetConceptByCharacter } from "../app";

export async function DeleteConnectionByType(id: number, linker: string){
    let connections = await ConnectionData.GetConnectionsOfConcept(id);
    let concept = await GetConceptByCharacter(linker);
    let toDelete: Connection[] = [];
    for(let i=0; i<connections.length; i++){
        if(connections[i].typeId == concept.id){
            toDelete.push(connections[i]);
        }
    }
    for(let i=0 ;i < toDelete.length; i++){
        DeleteConnectionById(toDelete[i].id);
    }
}
