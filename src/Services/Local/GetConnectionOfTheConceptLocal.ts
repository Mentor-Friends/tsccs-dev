import { LocalConnectionData } from "../../DataStructures/Local/LocalConnectionData";
import { LConnection } from "../../app";

export async function GetConnectionOfTheConceptLocal(ofTheConcept: number, typeId: number, userId: number){
    try{
        let connections: LConnection[] = await LocalConnectionData.GetConnectionOfCompositionAndTypeLocal(typeId, ofTheConcept);
        return connections;
    }
    catch(error){
        throw error;
    }

}