import {  CreateDefaultLConcept } from './../../Services/Local/CreateDefaultLConcept';
import { LConcept } from './../../DataStructures/Local/LConcept';
import { UserBinaryTree } from './../../DataStructures/User/UserBinaryTree';

export async function GetUserGhostId(userId:number, ghostId:number){

    let userNode =   await UserBinaryTree.getNodeFromTree(userId);
    let realConcept: LConcept = CreateDefaultLConcept();
    if(userNode){
        for(let i=0 ; i<userNode.value.length; i++ ){
            let testConcept: LConcept = userNode.value[i];
            console.log(`This is the equality measurer  ${ghostId} , ${testConcept.ghostId}`);
            if(testConcept.ghostId == ghostId){
                realConcept = testConcept;
                console.log("this is the real concept", realConcept);

            }
        }
    }
    return realConcept;
}

export async function AddGhostConcept(concept: LConcept, userId: number){
    console.log("Adding this ghost to tree", concept.ghostId);
    UserBinaryTree.addConceptToTree(concept,userId);
}