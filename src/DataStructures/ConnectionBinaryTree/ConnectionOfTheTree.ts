import { dispatchIdEvent } from "../../app";
import { Connection } from "../Connection";
import { ConnectionOfNode } from "./ConnectionOfNode";

/**
 * This is a binary tree that is used to store the reference to the main connection of the concept.
 */
export class ConnectionOfTheTree{


    static node: ConnectionOfNode | null = null;

    static CreateCompositionKey(ofTheConceptId: number, typeId: number){
        return ofTheConceptId;
    }

    static GetConnectionByOfTheConceptAndTypeId(ofTheConceptId:number, typeId:number){
        let key = this.CreateCompositionKey(ofTheConceptId, typeId);
        if(this.node){
            let existingNode = this.node.getFromNode(key, this.node);
            if(existingNode){
                return existingNode.value;
            }
        }
        return null;

    }

    /**
     * This function lets you add a connection by composite key with of the concept id and type id.
     * This function checks if the connection already exists and then updates in the case that it does not
     * If the connection of the concept id and type id combination is encountered first time then a node is created.
     * @param connection connection that needs to be added.
     */
    static addConnection(connection: Connection){
        if(connection.id > 0){
            let key = this.CreateCompositionKey(connection.ofTheConceptId, connection.typeId);
            console.log('key this.node', key, this.node)

            if(this.node){
                // let event = new Event(`${key}`);
                // // console.log("dispatched the of the concecpt event", event);
                // dispatchEvent(event);
                dispatchIdEvent(key)
                let existingNode:ConnectionOfNode|null = this.node.getFromNode(key, this.node);
                console.log(existingNode, 'existing node')
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
                    let connectionNode = new ConnectionOfNode(key, list, null, null);
                    this.addNodeToTree(connectionNode);
                }


            }
            else{
                let list: number [] = [];
                list.push(connection.id);
                let connectionNode = new ConnectionOfNode(key, list, null, null);
                this.addNodeToTree(connectionNode);
            }

            
        }
        else{
            console.log("cannot insert key id with  n 0 to the connection tree", connection);
        }

    }

    /**
     * This is a function to add the connectionNode to the existing tree
     * @param connectionOfNode This is the node that needs to be added to the tree.
     * @returns ConnectionOfNode
     */
    static async addNodeToTree(connectionOfNode:ConnectionOfNode){
        if(this.node == null){
            this.node = connectionOfNode;
            let event = new Event(`${this.node.key}`);
            console.log("dispatched the of the concecpt event", event);
            // dispatchEvent(event);
            dispatchIdEvent(this.node.key)
            return this.node;
        }
        else{
            this.node = this.node.addNode(connectionOfNode,this.node, this.node.height);
        }
        return this.node;
    }


    static async removeNodeFromTree(id:number){
        if(this.node){
            this.node = this.node.removeNode(this.node,id);
        }
      }


}