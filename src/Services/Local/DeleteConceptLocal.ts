import { LConcept } from "../../app";
import { removeFromDatabase } from "../../Database/indexdblocal";
import { LocalBinaryTree } from "../../DataStructures/Local/LocalBinaryTree";
import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { GetTheConceptLocal } from "./GetTheConceptLocal";

export async function DeleteConceptLocal(id:number){
    let concept: LConcept = await GetTheConceptLocal(id);
    LocalConceptsData.RemoveConcept(concept);
}