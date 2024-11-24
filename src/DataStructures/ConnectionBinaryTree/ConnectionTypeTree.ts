import { Connection } from "../../DataStructures/Connection";
import { IdentifierFlags } from "../IdentifierFlags";
import { ConnectionNode } from "./ConnectionNode";
import { ConnectionTypeNode } from "./ConnectionTypeNode";

export class ConnectionTypeTree{
    static connectionTypeRoot: ConnectionTypeNode | null = null;

    static CreateCompositionKey(typeId: number){
        return typeId;
    }
    /**
     * This is a function to add the connectionNode to the existing tree
     * @param connectionOfNode This is the node that needs to be added to the tree.
     * @returns ConnectionOfNode
     */
    static async addNodeToTree(connectionOfNode:ConnectionTypeNode){
        if(this.connectionTypeRoot == null){
            this.connectionTypeRoot = connectionOfNode;
            return this.connectionTypeRoot;
        }
        else{
            this.connectionTypeRoot = this.connectionTypeRoot.addNode(connectionOfNode,this.connectionTypeRoot, this.connectionTypeRoot.height);
        }
        return this.connectionTypeRoot;
    }


    /**
     * This function lets you add a connection by composite key with of the concept id and type id.
     * This function checks if the connection already exists and then updates in the case that it does not
     * If the connection of the concept id and type id combination is encountered first time then a node is created.
     * @param connection connection that needs to be added.
     */
    static addConnectionToTree(connection: Connection){
        if(connection.id > 0){
            let key = this.CreateCompositionKey(connection.typeId);


            if(this.connectionTypeRoot){
                // let event = new Event(`${key}`);
                // // console.log("dispatched the of the concecpt event", event);
                // dispatchEvent(event);
                let existingNode:ConnectionTypeNode|null = this.connectionTypeRoot.getFromNode(key, this.connectionTypeRoot);
                if(existingNode){
                    let connectionList: number[] = existingNode?.value;
                    if(connectionList.length == 0){
                        existingNode.value = [];
                    }
                        if(!connectionList.includes(connection.id)){
                            connectionList.push(connection.id);
                        }
                } 
                else{
                    let list: number [] = [];
                    list.push(connection.id);
                    let connectionNode = new ConnectionTypeNode(key, list, null, null);
                    this.addNodeToTree(connectionNode);
                }


            }
            else{
                let list: number [] = [];
                list.push(connection.id);
                let connectionNode = new ConnectionTypeNode(key, list, null, null);
                this.addNodeToTree(connectionNode);
            }

            
        }
        else{
            console.log("cannot insert key id with  n 0 to the connection tree", connection);
        }

    }

    // static async removeNodeFromTree(id:number){
    //     if(this.connectionTypeRoot){
    //         this.connectionTypeRoot = this.connectionTypeRoot.removeNode(this.connectionTypeRoot,id);
    //     }
    //   }

        // commented
    // static getNodeFromTree(id:number){



    //     if(this.connectionTypeRoot){
    //         let Node = this.connectionTypeRoot.getFromNode(id, this.connectionTypeRoot);
    //         return Node;
    //     }
    //     return this.connectionTypeRoot;
    // }

    static GetConnectionByOfTheConceptAndTypeId(ofTheConceptId:number, typeId: number){
        let key = this.CreateCompositionKey(typeId);
        if(this.connectionTypeRoot){
            let existingNode = this.connectionTypeRoot.getFromNode(key, this.connectionTypeRoot);
            if(existingNode){
                return existingNode.value;
            }
        }
        return null;

    }

    // commented
    // static async getTypeVariantsFromTree(typeId:number){
    //     let connection : Connection[] = [];

    //     // try{
    //     //     let data = await this.waitForDataToLoad();
    //     // }
    //     // catch(exception){
    //     //     return connection;
    //     // }

    //     let Node = this.getNodeFromTree(typeId);
    
    //         if(Node){
    //             connection.push(Node?.value);
    //             for(let i=0; i< Node.variants.length; i++){
    //                 connection.push(Node.variants[i].value);
    //             }
            
    //         return connection;
    //     }


    // }





    // commented
    // static async getTypeVariantsFromTreeWithUserId(typeId:number, userId:number){
    //     var concepts : Connection[] = [];

    //         var Node = this.getNodeFromTree(typeId);
    
    //         if(Node){
    //             if(Node.value.userId == userId ){
    //                 concepts.push(Node?.value);
    //             }
    //             for(let i=0; i< Node.variants.length; i++){
    //                 if(Node.variants[i].value.userId == userId ){
    //                     concepts.push(Node.variants[i].value);
    //                 }
    //             }
    //         }
    //     return concepts;
    // }





}