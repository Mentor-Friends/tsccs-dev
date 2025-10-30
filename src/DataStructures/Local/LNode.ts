/**
 * @fileoverview Local Node data structure for binary tree operations.
 * This module defines the LNode class which represents a node in an AVL
 * (self-balancing) binary tree for storing and managing LConcept instances.
 * @module DataStructures/Local/LNode
 */

import { LConcept } from "./LConcept";

/**
 * Represents a node in an AVL binary tree for local concepts.
 * This class implements self-balancing tree operations including rotations,
 * insertions, deletions, and lookups for efficient concept management.
 *
 * @class LNode
 * @export
 */
export class LNode{
    /**
     * The key used for tree ordering (can be number or string).
     * @type {any}
     */
    key:any;
    /**
     * The concept value stored in this node.
     * @type {LConcept}
     */
    value:LConcept;
    /**
     * Reference to the left child node.
     * @type {LNode | null}
     */
    leftNode: LNode | null;
    /**
     * Reference to the right child node.
     * @type {LNode | null}
     */
    rightNode: LNode | null;
    /**
     * Reference to current node for linking nodes with same key.
     * @type {LNode | null}
     */
    currentNode: LNode | null;
    /**
     * Array of variant nodes with same key but different properties.
     * @type {LNode[]}
     * @default []
     */
    variants: LNode [] = [] ;
    /**
     * Height of the node in the tree for AVL balancing.
     * @type {number}
     * @default 1
     */
    height:number = 1;

    /**
     * Creates a new LNode instance.
     *
     * @constructor
     * @param {any} key - The key used for tree ordering
     * @param {LConcept} value - The concept value to store
     * @param {LNode | null} leftNode - Reference to left child
     * @param {LNode | null} rightNode - Reference to right child
     */
    constructor(key:any, value:LConcept, leftNode: LNode | null, rightNode:LNode| null){
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
        this.currentNode = null;
    }

    /**
     * Adds a current node to the chain based on typeId.
     * This method links nodes with different typeIds.
     *
     * @method addCurrentNode
     * @param {LNode} passedNode - The node to add
     * @param {LNode | null} node - The current node in the chain
     * @returns {LNode | null} The updated node chain
     */
    public addCurrentNode(passedNode:LNode, node:LNode|null){
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
     * Adds a node as a variant if it has the same key but different id.
     * This method manages variants (nodes with same key but different properties).
     *
     * @method addCurrentNodeType
     * @param {LNode} passedNode - The node to add as variant
     * @param {LNode | null} node - The current node
     * @returns {LNode | null} The updated node
     */
    public addCurrentNodeType(passedNode:LNode, node:LNode|null){
        if(node == null){
            node = passedNode;
            return node;
        }
        var contains = false;
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
     * Adds a node to the AVL tree with automatic balancing.
     * This method performs standard AVL insertion with rotations.
     *
     * @method addNode
     * @param {LNode} passedNode - The node to insert
     * @param {LNode | null} node - The current node in traversal
     * @param {number} height - Current height for balancing
     * @returns {LNode | null} The root of the updated subtree
     */
     public addNode(passedNode:LNode, node:LNode|null, height:number){
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
     * Adds a character node to the tree with variant management.
     * Handles nodes with character keys and manages variants for duplicate keys.
     *
     * @method addCharacterNode
     * @param {LNode} passedNode - The node to insert
     * @param {LNode | null} node - The current node in traversal
     * @param {number} height - Current height for balancing
     * @returns {LNode | null} The root of the updated subtree
     */
    public addCharacterNode(passedNode:LNode, node:LNode|null, height:number){
        var debugFlag = false;
        if(passedNode.value.characterValue != ""){

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
        // if (node.key == passedNode.key && node.key != "" ){
        //     if(passedNode.value.characterValue == "Default"){
        //         console.log("equal");
        //     }
        //     node.currentNode = passedNode;
        //     return node;
        // }

        var LeftNode = node.leftNode;
        var RightNode = node.rightNode;

        if(node.key > passedNode.key){
            if(debugFlag){
                console.log("left  here", node);
            }
            node.leftNode = this.addCharacterNode(passedNode,LeftNode,height);
        }

        else if(node.key < passedNode.key){
            if(debugFlag){
                console.log("right here", node, RightNode);
            }
           node.rightNode =  this.addCharacterNode(passedNode,RightNode,height);
        }

        // else if (node.key == passedNode.key && node.key != ""){
        //     node.currentNode = passedNode;
        // }
        else{
            if(debugFlag){
                console.log("else here", node, passedNode);
            }
            if (node.key == passedNode.key && node.key != "" && node.value.id != passedNode.value.id){
                   // node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
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
     * Adds a type node to the tree with variant management.
     * Handles nodes with typeId keys and manages variants for duplicate typeIds.
     *
     * @method addTypeNode
     * @param {LNode} passedNode - The node to insert
     * @param {LNode | null} node - The current node in traversal
     * @param {number} height - Current height for balancing
     * @returns {LNode | null} The root of the updated subtree
     */
    public addTypeNode(passedNode:LNode, node:LNode|null, height:number){
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
            if (node.key == passedNode.key && node.key != 0 && node.value.id != passedNode.value.id){
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
     * Performs a right rotation for AVL tree balancing.
     *
     * @method rightRotate
     * @param {LNode | null} y - The node to rotate
     * @returns {LNode | null} The new root of the rotated subtree
     */
     public rightRotate(y:LNode | null){
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
       * Performs a left rotation for AVL tree balancing.
       *
       * @method leftRotate
       * @param {LNode | null} x - The node to rotate
       * @returns {LNode | null} The new root of the rotated subtree
       */
      public leftRotate(x:LNode | null){

        if(x){
            let y = x.rightNode;
            if(y){
                let T2 = y.leftNode;
                y.leftNode = x;
                x.rightNode = T2;
                x.height = Math.max(this.getHeight(x.leftNode),this.getHeight(x.rightNode))  + 1;
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
     * @method getHeight
     * @param {LNode | null} node - The node to get height from
     * @returns {number} The height of the node, or 0 if null
     */
    public getHeight(node: LNode| null){
        if(node){
            return node.height;
        }
        return 0;
    }

    /**
     * Calculates the balance factor of a node.
     * Balance factor = height(left subtree) - height(right subtree)
     *
     * @method getBalanceFactor
     * @param {LNode | null} N - The node to calculate balance factor for
     * @returns {number} The balance factor (-2, -1, 0, 1, or 2)
     */
    public getBalanceFactor(N: LNode | null){
        if (N == null){
          return 0;
        }

        return this.getHeight(N.leftNode) - this.getHeight(N.rightNode);
      }

    /**
     * Searches for a node by numeric id.
     *
     * @method getFromNode
     * @param {number} id - The id to search for
     * @param {LNode | null} node - The current node in traversal
     * @returns {LNode | null} The found node or null
     */
    public getFromNode(id: number, node: LNode | null) :LNode | null{
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
     * Searches for a node by character value.
     *
     * @method getCharacterFromNode
     * @param {string} value - The character value to search for
     * @param {LNode | null} node - The current node in traversal
     * @returns {LNode | null} The found node or null
     */
    public getCharacterFromNode(value: string, node:LNode | null) :LNode | null{
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
     * Searches for a node by both character value and type id.
     * This method also searches through variants to find exact matches.
     *
     * @method getFromNodeWithCharacterAndType
     * @param {string} value - The character value to search for
     * @param {number} typeId - The type identifier to match
     * @param {LNode | null} node - The current node in traversal
     * @returns {LNode | null} The found node or null
     */
    public getFromNodeWithCharacterAndType(value: string, typeId: number, node:LNode | null) :LNode | null{
        value = `${value}`;
        if(node){
            if(value == node.key){

                if( value == node.value.characterValue && typeId == node.value.typeId){
                    return node;
                }
                else{
                    for(let i=0;i<node.variants.length;i++){
                        if(node.variants[i].value.typeId == typeId){
                            return node.variants[i];
                        }
                    }
                   // return this.getFromNodeWithCharacterAndType(value, typeId, node.currentNode);
                }
            }
            else if(value < node.key){
                return this.getFromNodeWithCharacterAndType(value, typeId, node.leftNode);
            }
            else if (value > node.key) {
                return this.getFromNodeWithCharacterAndType(value,typeId, node.rightNode);
            }
            return null;
        }
        return node;

    }

    /**
     * Removes a node from the tree by id.
     * Uses standard BST deletion with in-order successor replacement.
     *
     * @method removeNode
     * @param {LNode | null} passedNode - The current node in traversal
     * @param {number} id - The id of the node to remove
     * @returns {LNode | null} The root of the updated subtree
     */
    public removeNode(passedNode:LNode|null,id:number){
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
     * Removes a node with variant management.
     * If the node has variants, replaces the removed node with first variant.
     *
     * @method removeNodeWithVariants
     * @param {LNode | null} passedNode - The current node in traversal
     * @param {any} typeIdentifier - The type identifier (key) to search for
     * @param {number} conceptId - The concept id to remove
     * @returns {LNode | null} The root of the updated subtree
     */
    public removeNodeWithVariants(passedNode:LNode|null,typeIdentifier:any, conceptId:number){
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
     * Counts the total number of nodes in the subtree.
     *
     * @method countNodeBelow
     * @param {LNode | null} root - The root of the subtree
     * @returns {number} The total count of nodes
     */
      countNodeBelow(root:LNode|null):number{
        if(root==null)
        {
            return 0;
        }

        //recursive call to left child and right child and
        // add the result of these with 1 ( 1 for counting the root)
        return 1 + this.countNodeBelow(root.leftNode) + this.countNodeBelow(root.rightNode);
    }

    /**
     * Finds the in-order successor (leftmost node in right subtree).
     * Used during node deletion.
     *
     * @method inOrderSuccessor
     * @param {LNode} root - The root to find successor from
     * @returns {LNode} The in-order successor node
     */
    inOrderSuccessor(root:LNode){
        while (root.leftNode != null) {
            root = root.leftNode;
        }
        return root;
    }



}
