import {  CreateDefaultLConcept } from './../../Services/Local/CreateDefaultLConcept';
import { LConcept } from './../../DataStructures/Local/LConcept';
import { UserBinaryTree } from './../../DataStructures/User/UserBinaryTree';

export async function GetUserGhostId(userId:number, ghostId:number){

    let userNode =   await UserBinaryTree.getNodeFromTree(userId);
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

export async function AddGhostConcept(concept: LConcept, userId: number){
    UserBinaryTree.addConceptToTree(concept,userId);
}