import { LConcept } from "../../DataStructures/Local/LConcept";
import { UserNode } from "./UserNode";
import { IdentifierFlags } from "./../IdentifierFlags";

export class UserBinaryTree{
    static root: UserNode | null = null;

    static compositeKey(userId: number, sessionId: number){
        let userHex = ('0000' + userId.toString(16).toUpperCase()).slice(-4);
        let sessionHex = ('0000' + sessionId.toString(16).toUpperCase()).slice(-4);
        return userHex + sessionHex;
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
        let key = this.compositeKey(userId, sessionId);
        var node: UserNode = new UserNode(key, concept, null, null);
        this.addNodeToTree(node);
    }

    static async getNodeFromTree(userId:number, sessionId: number ){
        try{
            var data = await this.waitForDataToLoad();
        }
        catch(exception){
            return null;
        }
        let key = this.compositeKey(userId, sessionId);
        if(this.root){
            var Node = this.root.getFromNode(key, this.root);
            return Node;
        }
        return null;
    }
    

    static async removeNodeFromTree(userId:number, sessionId: number = 999){
        if(this.root){
            let key = this.compositeKey(userId, sessionId);
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