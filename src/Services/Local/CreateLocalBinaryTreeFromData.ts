import { LocalConceptsData } from "../../DataStructures/Local/LocalConceptData";
import { LocalId } from "../../DataStructures/Local/LocalId";
import { getAllFromLocalDb } from "../../Database/indexdblocal";

export default  async function CreateLocalBinaryTreeFromData(){
    var conceptList = await getAllFromLocalDb("localconcept");
        if(Array.isArray(conceptList)){
            for(var i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                LocalConceptsData.AddConceptToMemory(concept);
                // let node = new Node(concept.id, concept, null, null);
                // LocalBinaryTree.addNodeToTree(node);
            }

        }


}

export async function GetLastUpdatedIds(){
    var idList = await getAllFromLocalDb("localid");
    if(Array.isArray(idList)){
        
        if(idList[0]){
            LocalId.AddConceptId(idList[0]);

        }
        if(idList[1]){
            LocalId.AddConnectionId(idList[1]);

        }
        }

    // if(Array.isArray(connectionList)){
    //     for(var i=0 ;i < connectionList.length ;i++){
    //         LocalId.AddId(connectionList[i]);
    //     }
    // }
 }
