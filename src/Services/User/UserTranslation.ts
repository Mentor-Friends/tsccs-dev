import {  CreateDefaultLConcept } from './../../Services/Local/CreateDefaultLConcept';
import { LConcept } from './../../DataStructures/Local/LConcept';
import { UserBinaryTree } from './../../DataStructures/User/UserBinaryTree';
import { LConnection } from '../../app';

export async function GetUserGhostId(userId:number,  ghostId:number, sessionId:number = 999){

    let userNode =   await UserBinaryTree.getNodeFromTree(userId, sessionId);
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

export async function GetUserGhostConnectionId(userId:number,  ghostId:number, sessionId:number = 999){

    let userNode =   await UserBinaryTree.getNodeFromTree(userId, sessionId);
    let realConnection: LConnection = new LConnection(0,0,0,0,0,0);
    if(userNode){
        for(let i=0 ; i<userNode.connectionValue.length; i++ ){
            let testConnection: LConnection = userNode.connectionValue[i];
            if(testConnection.ghostId == ghostId){
                realConnection = testConnection;

            }
        }
    }
    return realConnection;
}

export async function AddGhostConcept(concept: LConcept, userId: number, sessionId: number = 999){
    UserBinaryTree.addConceptToTree(concept,userId, sessionId);

}


export async function AddGhostConnection(connection: LConnection, userId: number, sessionId: number = 999){
    UserBinaryTree.addConnectionToTree(connection,userId, sessionId);

}