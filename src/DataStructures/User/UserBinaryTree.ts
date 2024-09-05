import { LConcept } from "../../DataStructures/Local/LConcept";
import { UserNode } from "./UserNode";
import { IdentifierFlags } from "./../IdentifierFlags";
import { LConnection } from "../Local/LConnection";
import { CreateDefaultLConcept } from "../../app";

export class UserBinaryTree{
    static root: UserNode | null = null;

    static compositeKey(userId: number, sessionId: number, randomizer: number){
        let userHex = ('0000' + userId.toString(16).toUpperCase()).slice(-4);
        let sessionHex = ('0000' + sessionId.toString(16).toUpperCase()).slice(-4);
        let randomizerHex = ('0000'+ randomizer.toString(16).toUpperCase()).slice(-4);
        console.log("this is the randomizer", randomizer, randomizerHex);
        console.log("this is the key", userHex + sessionHex + randomizerHex);

        return userHex + sessionHex + randomizerHex;
    }
    static addNodeToTree(node:UserNode){
        if(this.root == null){
            this.root = node;
            return this.root;
        }
        else{
            this.root = this.root.addNode(node,this.root,this.root.height);

        }
    }

    static async waitForDataToLoad(){
        return new Promise((resolve,reject) => {
            this.checkFlag(resolve);
            setTimeout(()=>{
                reject("not")},25000);
            });
    }


    static  checkFlag(resolve:any){

        if(IdentifierFlags.isDataLoaded){
            return resolve("done");
        }
        else{
            setTimeout(UserBinaryTree.checkFlag, 1000, resolve);
        }
      };

    static addConceptToTree(concept:LConcept, userId:number, sessionId: number = 999){
        let key = this.compositeKey(userId, sessionId, concept.applicationId);
        let FakeConnection: LConnection = new LConnection(0,0,0,0,0,0);
        var node: UserNode = new UserNode(key, concept,FakeConnection,  null, null);
        this.addNodeToTree(node);
    }

    static addConnectionToTree(connection:LConnection, userId:number, sessionId: number = 999){
        let key = this.compositeKey(userId, sessionId, connection.applicationId);
        let FakeConcept: LConcept = CreateDefaultLConcept();
        var node: UserNode = new UserNode(key, FakeConcept,connection, null, null);
        this.addNodeToTree(node);
    }

    static async getNodeFromTree(userId:number, sessionId: number, randomizer: number=999 ){
        try{
            var data = await this.waitForDataToLoad();
        }
        catch(exception){
            return null;
        }
        let key = this.compositeKey(userId, sessionId, randomizer);
        if(this.root){
            var Node = this.root.getFromNode(key, this.root);
            return Node;
        }
        return null;
    }
    

    static async removeNodeFromTree(userId:number, sessionId: number = 999, randomizer = 999){
        if(this.root){
            let key = this.compositeKey(userId, sessionId, randomizer);
            this.root = this.root.removeNode(this.root,key);
        }
    }




    static countNumberOfNodes(){
        if(this.root){
            return this.root.countNodeBelow(this.root);

        }
        return 0;
    }





}