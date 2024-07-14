import { LocalConnectionData } from "../../DataStructures/Local/LocalConnectionData";
import { ConnectionData, LConnection } from "../../app";

export async function GetConnectionOfTheConceptLocal(ofTheConcept: number, typeId: number, userId: number){
    let connections: LConnection[] = await LocalConnectionData.GetConnectionOfCompositionAndTypeLocal(typeId, ofTheConcept);
    return connections;
}