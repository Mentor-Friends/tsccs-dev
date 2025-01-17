import { Connection } from "../../DataStructures/Connection";
import { IdentifierFlags } from "../IdentifierFlags";
import { ConnectionNode } from "./ConnectionNode";

export class ConnectionTypeTree{
    static connectionTypeRoot: ConnectionNode | null = null;

    static async addNodeToTree(node:ConnectionNode){
        if(this.connectionTypeRoot == null){
            this.connectionTypeRoot = node;
            return this.connectionTypeRoot;
        }
        else{
            this.connectionTypeRoot = this.connectionTypeRoot.addTypeNode(node,this.connectionTypeRoot,this.connectionTypeRoot.height);
        }
        return this.connectionTypeRoot;
    }

    static async waitForDataToLoad(){
        return new Promise((resolve,reject) => {
            this.checkFlag(resolve);
            setTimeout(()=>{
                reject("not")},25000);
            });
    }


    static  checkFlag(resolve:any){

        if(IdentifierFlags.isConnectionTypeLoaded){
            return resolve("done");
        }
        else{
            setTimeout(ConnectionTypeTree.checkFlag, 1000, resolve);
        }
      };

    static addConnectionToTree(connection:Connection){
        if(connection.typeId != 0){
            var node: ConnectionNode = new ConnectionNode(connection.typeId, connection, null, null);
            this.addNodeToTree(node);
        }

    }

    static removeTypeConcept(typeId:number,id:number){
        if(this.connectionTypeRoot){
            this.connectionTypeRoot = this.connectionTypeRoot.removeNodeWithVariants(this.connectionTypeRoot,typeId,id);

        }
    }

    static getNodeFromTree(id:number){



        if(this.connectionTypeRoot){
            var Node = this.connectionTypeRoot.getFromNode(id, this.connectionTypeRoot);
            return Node;
        }
        return this.connectionTypeRoot;
    }

    static async getTypeVariantsFromTree(typeId:number){
        var connection : Connection[] = [];

        // try{
        //     var data = await this.waitForDataToLoad();
        // }
        // catch(exception){
        //     return connection;
        // }

            var Node = this.getNodeFromTree(typeId);
    
            if(Node){
                connection.push(Node?.value);
                for(let i=0; i< Node.variants.length; i++){
                    connection.push(Node.variants[i].value);
                }
            
            return connection;
        }


    }






    static async getTypeVariantsFromTreeWithUserId(typeId:number, userId:number){
        var concepts : Connection[] = [];

            var Node = this.getNodeFromTree(typeId);
    
            if(Node){
                if(Node.value.userId == userId ){
                    concepts.push(Node?.value);
                }
                for(let i=0; i< Node.variants.length; i++){
                    if(Node.variants[i].value.userId == userId ){
                        concepts.push(Node.variants[i].value);
                    }
                }
            }
        return concepts;
    }





}