import { Connection } from "../../DataStructures/Connection";
import { IdentifierFlags } from "../IdentifierFlags";
import { ConnectionNode } from "./ConnectionNode";

export class ConnectionBinaryTree{
    static connectionroot: ConnectionNode | null = null;

    static addNodeToTree(node:ConnectionNode){
        try{
            if(this.connectionroot == null){
                this.connectionroot = node;
                return this.connectionroot;
            }
            else{
                this.connectionroot = this.connectionroot.addNode(node,this.connectionroot,this.connectionroot.height);
            }
        }
        catch(error){
            console.log("This is the error in making the tree", error);
            throw error;
        }

    }

    static addConnectionToTree(connection:Connection){
        let node: ConnectionNode = new ConnectionNode(connection.id, connection, null, null);
        this.addNodeToTree(node);
    }

    static traverse(){
        return this.connectionroot?.traverse(this.connectionroot);
    }


    static async waitForDataToLoad(){
        return new Promise((resolve,reject) => {
            this.checkFlag(resolve);
            setTimeout(()=>{
                reject("not")},25000);
            });
    }

    static  checkFlag(resolve:any){

        if(IdentifierFlags.isConnectionLoaded){
            return resolve("done");
        }
        else{
            setTimeout(ConnectionBinaryTree.checkFlag, 1000, resolve);
        }
      };

      static async removeNodeFromTree(id:number){
        if(this.connectionroot){
            this.connectionroot = this.connectionroot.removeNode(this.connectionroot,id);
        }
      }





    static async getNodeFromTree(id:number){
        try{
            if(this.connectionroot){
            
                let Node = this.connectionroot.getFromNode(id, this.connectionroot);
                return Node;
            }
            return this.connectionroot;
        }
        catch(ex){
            console.log("this is the getNodeFromTree", id, this.connectionroot);

        }

    }

    static async getConnectionListFromIds(ids: number[], connectionArray: Connection [], remainingIds: any){
        if(this.connectionroot){
            this.connectionroot.checkIfIdsInNode(this.connectionroot, ids, connectionArray, remainingIds);
        }
    }



}