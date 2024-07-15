import {  CreateDefaultLConcept } from './../../Services/Local/CreateDefaultLConcept';
import { LConcept } from './../../DataStructures/Local/LConcept';
import { UserBinaryTree } from './../../DataStructures/User/UserBinaryTree';

export async function GetUserGhostId(userId:number,  ghostId:number, sessionId:number = 999){

    let userNode =   await UserBinaryTree.getNodeFromTree(userId, sessionId);
    console.log("this is the ghost id", userId, sessionId)
    let realConcept: LConcept = CreateDefaultLConcept();
    if(userNode){
        for(let i=0 ; i<userNode.value.length; i++ ){
            let testConcept: LConcept = userNode.value[i];
            if(testConcept.ghostId == ghostId){
                realConcept = testConcept;

            }
        }
    }
    return realConcept;
}

export async function AddGhostConcept(concept: LConcept, userId: number, sessionId: number = 999){
    console.log("adding this to ghost id", userId, sessionId)
    UserBinaryTree.addConceptToTree(concept,userId, sessionId);
}