import {  CreateDefaultLConcept } from './../../Services/Local/CreateDefaultLConcept';
import { Concept } from './../../DataStructures/Concept';
import { UserBinaryTree } from './../../DataStructures/User/UserBinaryTree';

export async function GetUserGhostId(userId:number,  ghostId:number, sessionId:number = 999){

    let userNode =   await UserBinaryTree.getNodeFromTree(userId, sessionId);
    let realConcept: Concept = CreateDefaultLConcept();
    console.log("this is the usernode", userNode);
    if(userNode){
        for(let i=0 ; i<userNode.value.length; i++ ){
            let testConcept: Concept = userNode.value[i];
            if(testConcept.ghostId == ghostId){
                realConcept = testConcept;

            }
        }
    }
    return realConcept;
}

export async function AddGhostConcept(concept: Concept, userId: number, sessionId: number = 999){
    UserBinaryTree.addConceptToTree(concept,userId, sessionId);

}