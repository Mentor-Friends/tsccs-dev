/**
 * @fileoverview Node implementation for the ConnectionBinaryTree.
 * This module provides the ConnectionNode class with AVL tree operations and variant management.
 * @module DataStructures/ConnectionBinaryTree/ConnectionNode
 */

import {  Connection } from "./../Connection";

/**
 * Represents a node in the connection binary tree with support for variants.
 *
 * @remarks
 * ConnectionNode implements an AVL tree node for Connection objects with special
 * support for managing connection variants (multiple connections with the same key).
 * Each node can store multiple connection variants in the variants array, allowing
 * efficient grouping of related connections by type or other criteria.
 *
 * @example
 * ```typescript
 * const connection = new Connection(123, 1, 2, 3, 4, 5);
 * const node = new ConnectionNode(123, connection, null, null);
 * ```
 */
export class ConnectionNode{
    /**
     * The key used for tree ordering (typically connection ID or type ID).
     */
    key:any;

    /**
     * The Connection object stored in this node.
     */
    value:Connection;

    /**
     * Reference to the left child node.
     */
    leftNode: ConnectionNode | null;

    /**
     * Reference to the right child node.
     */
    rightNode: ConnectionNode | null;

    /**
     * Reference to current node for variant chaining.
     */
    currentNode: ConnectionNode | null;

    /**
     * Array of variant nodes that share the same key.
     * Used for storing multiple connections with the same type or identifier.
     */
    variants: ConnectionNode [] = [] ;

    /**
     * The height of this node in the tree.
     * Used for AVL tree balancing calculations.
     */
    height:number = 1;

    /**
     * Creates a new ConnectionNode.
     *
     * @param key - The key for tree ordering
     * @param value - The Connection object to store
     * @param leftNode - The left child node (or null)
     * @param rightNode - The right child node (or null)
     *
     * @example
     * ```typescript
     * const node = new ConnectionNode(123, connection, null, null);
     * ```
     */
    constructor(key:any, value:Connection, leftNode: ConnectionNode | null, rightNode:ConnectionNode| null){
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
        this.currentNode = null;
    }

    /**
     * Adds a node to the current node chain by type ID.
     *
     * @param passedNode - The node to add
     * @param node - The current node in the chain
     * @returns The updated node chain
     *
     * @remarks
     * Used internally for managing connection variants with different type IDs.
     */
    public addCurrentNode(passedNode:ConnectionNode, node:ConnectionNode|null){
        if(node == null){
            node = passedNode;
            return node;
        }
        if(passedNode.value.typeId != node.value.typeId ){
            node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
        }
        return node;
    }

    /**
     * Adds a connection variant to this node's variants array.
     *
     * @param passedNode - The variant node to add
     * @param node - The current node
     * @returns The updated node with the new variant
     *
     * @remarks
     * This method ensures no duplicate connections are added by checking IDs.
     * Variants are stored in the variants array for efficient retrieval.
     */
    public addCurrentNodeType(passedNode:ConnectionNode, node:ConnectionNode|null){
        if(node == null){
            node = passedNode;
            return node;
        }
        var contains = false;
        if(passedNode.value.id == node.value.id){
            contains = true;
        }
        for(let i=0; i<node.variants.length; i++){
            if(node.variants[i].value.id == passedNode.value.id){
                contains = true;
            }
        }
        if(!contains){
            node.variants.push(passedNode);
        }
            //node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
        return node;
    }

     /**
      * Adds a new node to the tree with AVL balancing.
      *
      * @param passedNode - The node to be added
      * @param node - The current node being evaluated
      * @param height - The height of the current node
      * @returns The root node after insertion and balancing
      *
      * @remarks
      * Implements AVL tree insertion with automatic balancing through rotations.
      */
     public addNode(passedNode:ConnectionNode, node:ConnectionNode|null, height:number){
        if(node  == null){
            node = passedNode;
            return node;
        }

        var LeftNode = node.leftNode;
        var RightNode = node.rightNode;

        if(node.key > passedNode.key){
            node.leftNode = this.addNode(passedNode,LeftNode,height);
        }

        else if(node.key < passedNode.key){
           node.rightNode =  this.addNode(passedNode,RightNode,height);
        }

        // else if (node.key == passedNode.key && node.key != ""){
        //     node.currentNode = passedNode;
        // }
        else{
            return node;
        }

        node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));

        let balancingFactor = this.getBalanceFactor(node);
        if(balancingFactor > 1){
            if(node.leftNode){
                if(passedNode.key < node.leftNode.key){
                    return this.rightRotate(node);
                }
                else if(passedNode.key > node.leftNode.key){
                    node.leftNode = this.leftRotate(node.leftNode);
                    return this.rightRotate(node);
                }
            }

        }

        if(balancingFactor < -1){
            if(node.rightNode){
                if(passedNode.key > node.rightNode.key){
                    return this.leftRotate(node);
                }
                else if (passedNode.key < node.rightNode.key){
                    node.rightNode = this.rightRotate(node.rightNode);
                    return this.leftRotate(node);
                }
            }
        }
        return node;
        
    }


    /**
     * Adds a node to the tree indexed by type ID with variant support.
     *
     * @param passedNode - The node to be added
     * @param node - The current node being evaluated
     * @param height - The height of the current node
     * @returns The root node after insertion and balancing
     *
     * @remarks
     * This method is similar to addNode but specifically handles type-based indexing
     * and manages connection variants that share the same type ID.
     */
    public addTypeNode(passedNode:ConnectionNode, node:ConnectionNode|null, height:number){
        var debugFlag = false;
        if(passedNode.value.typeId != 0){

            // if(passedNode.value.characterValue == "Default"){
            //     console.log("default here");
            //     debugFlag = true;
            // }

        if(node  == null){
            if(debugFlag){
                console.log("equal here", node);
            }
            node = passedNode;
            return node;
        }

        var LeftNode = node.leftNode;
        var RightNode = node.rightNode;

        if(node.key > passedNode.key){
            if(debugFlag){
                console.log("left  here", node);
            }
            node.leftNode = this.addTypeNode(passedNode,LeftNode,height);
        }

        else if(node.key < passedNode.key){
            if(debugFlag){
                console.log("right here", node, RightNode);
            }
           node.rightNode =  this.addTypeNode(passedNode,RightNode,height);
        }

        else{
            if(debugFlag){
                console.log("else here", node, passedNode);
            }
            if (node.key == passedNode.key && node.key != 0){
                    node.addCurrentNodeType(passedNode,node);
            }
            return node;
        }

        node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
        if(debugFlag){
            console.log("height here", node.height);
        }
        let balancingFactor = this.getBalanceFactor(node);

        if(debugFlag){
            console.log("balancingFactor here",balancingFactor);
        }
        if(balancingFactor > 1){
            if(node.leftNode){
                if(passedNode.key < node.leftNode.key){
                   var returner =  this.rightRotate(node);
                   if(debugFlag){
                    console.log("returning here 1 ",returner);
                   }
                   return returner;
                }
                else if(passedNode.key > node.leftNode.key){
                    node.leftNode = this.leftRotate(node.leftNode);
                    var returner =  this.rightRotate(node);
                    if(debugFlag){
                        console.log("returning here 2 ",returner);
                    }
                        return returner;
                }
            }

        }

        if(balancingFactor < -1){
            if(node.rightNode){
                if(passedNode.key > node.rightNode.key){

                    var returner =  this.leftRotate(node);
                    if(debugFlag){
                        console.log("returning here 3 ",returner);
                    }
                    return returner;
                }
                else if (passedNode.key < node.rightNode.key){
                    node.rightNode = this.rightRotate(node.rightNode);
                    var returner = this.leftRotate(node);
                    if(debugFlag){
                        console.log("returning here4 ",returner, node);

                    }
                    return returner;
                }
            }
        }
    }
    else{
        if(debugFlag){
            console.log("what here", node);
        }
    }
    if(debugFlag){
        console.log("returning here 6", node);
    }
    return node;

    }

     /**
      * Performs a right rotation on the given node for AVL balancing.
      *
      * @param y - The node to rotate right
      * @returns The new root node after rotation
      */
     public rightRotate(y:ConnectionNode | null){
        if(y){
            let x = y.leftNode;
            if(x){
                let T2 = x.rightNode;

                y.leftNode = T2;
    
                x.rightNode = y;
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(y.rightNode)) + 1;
                        
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode)) + 1;
                return x;
            }
           // return x;
        }
        return y;

      }

      /**
       * Performs a left rotation on the given node for AVL balancing.
       *
       * @param x - The node to rotate left
       * @returns The new root node after rotation
       */
      public leftRotate(x:ConnectionNode | null){

        if(x){
            let y = x.rightNode;
            if(y){
                let T2 = y.leftNode;
                y.leftNode = x;
                x.rightNode = T2;
                x.height = Math.max(this.getHeight(x.leftNode),this.getHeight(x.rightNode)) + 1;
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(x.rightNode))  + 1;
                return y;
            }
            //return y;
        }
        return x;

      }
      

    /**
     * Gets the height of a node.
     *
     * @param node - The node to get the height from
     * @returns The height of the node, or 0 if null
     */
    public getHeight(node: ConnectionNode| null){
        if(node){
            return node.height;
        }
        return 0;
    }

    /**
     * Calculates the balance factor of a node.
     *
     * @param N - The node to calculate the balance factor for
     * @returns The balance factor (difference between left and right heights)
     */
    public getBalanceFactor(N: ConnectionNode | null){
        if (N == null){
          return 0;
        }

        return this.getHeight(N.leftNode) - this.getHeight(N.rightNode);
      }

    /**
     * Retrieves a node from the tree by its numeric ID.
     *
     * @param id - The connection ID to search for
     * @param node - The current node being evaluated
     * @returns The matching ConnectionNode if found, null otherwise
     */
    public getFromNode(id: number, node: ConnectionNode | null) :ConnectionNode | null{
        if(node){
            if(id == node.key){
                return node;
            }
            else if(id < node.key){
                return this.getFromNode(id, node.leftNode);
            }
            else if (id > node.key) {
                return this.getFromNode(id, node.rightNode);
            }
            return node;
        }
        return node;

    }

    /**
     * Retrieves a node from the tree by its character/string value.
     *
     * @param value - The character value to search for
     * @param node - The current node being evaluated
     * @returns The matching ConnectionNode if found, null otherwise
     */
    public getCharacterFromNode(value: string, node: ConnectionNode | null) :ConnectionNode | null{
        if(node){
            if(value == node.key){
                return node;
            }
            else if(value < node.key){
                return this.getCharacterFromNode(value, node.leftNode);
            }
            else if (value > node.key) {
                return this.getCharacterFromNode(value, node.rightNode);
            }
            return node;
        }
        return node;

    }


    /**
     * Removes a node from the tree by its ID.
     *
     * @param passedNode - The current node being evaluated
     * @param id - The connection ID to remove
     * @returns The root node after removal
     *
     * @remarks
     * Implements standard BST deletion with in-order successor replacement.
     */
    public removeNode(passedNode:ConnectionNode|null,id:number){
        if(passedNode == null){
            return passedNode;
        }
        if(passedNode.key > id){
            passedNode.leftNode = this.removeNode(passedNode.leftNode, id);
            return passedNode;
        }
        else if(passedNode.key < id){
            passedNode.rightNode = this.removeNode(passedNode.rightNode,id);
            return passedNode;
        }

        // if(passedNode.variants.length > 0){
        //     if(passedNode.value.id == id ){

        //     }
        //     var newNode = passedNode.variants[0];
        //     if(newNode){
        //         passedNode.value = newNode.value;
        //         passedNode.key = newNode.key;
        //         passedNode.currentNode = newNode.currentNode;
        //         return passedNode;

        //     }
        // }

        if(passedNode.leftNode == null){
            let temp = passedNode.rightNode;
            passedNode = null;
            return temp;
        }
        else if(passedNode.rightNode == null){
            let temp = passedNode.leftNode;
            passedNode = null;
            return temp;
        }
        else{                
            // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
            var immediateSuccessor =  this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.variants = immediateSuccessor.variants;
            passedNode.currentNode = immediateSuccessor.currentNode;
            passedNode.rightNode = this.removeNode(passedNode.rightNode,immediateSuccessor.key);
            return passedNode;

        }

}

/**
 * Removes a specific variant from a node or the entire node if no variants remain.
 *
 * @param passedNode - The current node being evaluated
 * @param typeIdentifier - The type identifier of the node
 * @param conceptId - The specific connection ID to remove
 * @returns The root node after removal
 *
 * @remarks
 * This method handles removal of connection variants. If the main value matches,
 * it's replaced by the first variant. If a variant matches, only that variant is removed.
 */
public removeNodeWithVariants(passedNode:ConnectionNode|null,typeIdentifier:any, conceptId:number){
    if(passedNode == null){
        return passedNode;
    }
    if(passedNode.key > typeIdentifier){
        passedNode.leftNode = this.removeNodeWithVariants(passedNode.leftNode, typeIdentifier,conceptId);
        return passedNode;
    }
    else if(passedNode.key < typeIdentifier){
        passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode,typeIdentifier,conceptId);
        return passedNode;
    }

    if(passedNode.variants.length > 0){
        //condition if the main node is equal to the value
        if(passedNode.value.id == conceptId ){
            var newNode = passedNode.variants[0];
            if(newNode){
                passedNode.value = newNode.value;
                passedNode.key = newNode.key;
                passedNode.currentNode = newNode.currentNode;
                passedNode.variants.splice(0,1);
                return passedNode;

            }
        }
        else{

            // in the condition that the main node is not equal to the checking value 
            for(let i=0; i<passedNode.variants.length; i++){
                if(conceptId == passedNode.variants[i].value.id){
                    passedNode.variants.splice(i, 1);
                    return passedNode;
                }
            }
        }

    }

    if(passedNode.leftNode == null){
        let temp = passedNode.rightNode;
        passedNode = null;
        return temp;
    }
    else if(passedNode.rightNode == null){
        let temp = passedNode.leftNode;
        passedNode = null;
        return temp;
    }
    else{                
        // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
        var immediateSuccessor =  this.inOrderSuccessor(passedNode.rightNode);
        passedNode.value = immediateSuccessor.value;
        passedNode.key = immediateSuccessor.key;
        passedNode.variants = immediateSuccessor.variants;
        passedNode.currentNode = immediateSuccessor.currentNode;
        passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode,immediateSuccessor.key,conceptId);
        return passedNode;

    }

}


/**
 * Finds the in-order successor of a node.
 *
 * @param root - The node to find the successor from
 * @returns The in-order successor node (leftmost node in right subtree)
 *
 * @remarks
 * Used during node deletion to find the replacement node.
 */
inOrderSuccessor(root:ConnectionNode){
    while (root.leftNode != null) {
        root = root.leftNode;
    }
    return root;
}




}