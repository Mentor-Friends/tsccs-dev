/**
 * @fileoverview Node implementation for the UserBinaryTree.
 * This module provides the UserNode class for storing user-specific concepts and connections.
 * @module DataStructures/User/UserNode
 */

import { LConcept } from "../Local/LConcept";
import { LConnection } from "../Local/LConnection";

/**
 * Represents a node in the user binary tree that stores both concepts and connections.
 *
 * @remarks
 * UserNode implements an AVL tree node that can store multiple concepts and connections
 * for a given composite key (userId + sessionId + randomizer). This allows efficient
 * storage and retrieval of all user data associated with a specific key combination.
 *
 * @example
 * ```typescript
 * const concept = new LConcept(123, "example", 5);
 * const connection = new LConnection(456, 1, 2, 3, 4, 5);
 * const node = new UserNode("compositeKey", concept, connection, null, null);
 * ```
 */
export class UserNode{
    /**
     * The composite key used for tree ordering.
     * Typically a hexadecimal string combining userId, sessionId, and randomizer.
     */
    key:any;

    /**
     * Array of connections stored in this node.
     * Multiple connections can be associated with the same key.
     */
    connectionValue: LConnection [] = [];

    /**
     * Array of concepts stored in this node.
     * Multiple concepts can be associated with the same key.
     */
    value: LConcept [] = [];

    /**
     * Reference to the left child node.
     */
    leftNode: UserNode | null;

    /**
     * Reference to the right child node.
     */
    rightNode: UserNode | null;

    /**
     * The height of this node in the tree.
     * Used for AVL tree balancing calculations.
     */
    height:number = 1;

    /**
     * Creates a new UserNode.
     *
     * @param key - The composite key for tree ordering
     * @param value - The LConcept to store (added if ID > 0)
     * @param connectionValue - The LConnection to store (added if ID > 0)
     * @param leftNode - The left child node (or null)
     * @param rightNode - The right child node (or null)
     *
     * @remarks
     * Only adds concepts and connections with valid (> 0) IDs to their respective arrays.
     *
     * @example
     * ```typescript
     * const node = new UserNode("compositeKey", concept, connection, null, null);
     * ```
     */
    constructor(key:any, value:LConcept, connectionValue : LConnection, leftNode: UserNode | null, rightNode:UserNode| null){
        this.key = key;
        if(value.id > 0){
            this.value.push(value);

        }
        if(connectionValue.id > 0){
            this.connectionValue.push(connectionValue);
        }
        this.leftNode = leftNode;
        this.rightNode = rightNode;
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
      * Implements AVL tree insertion. When a node with the same key exists,
      * the new node's concepts and connections are added to the existing node's arrays.
      */
     public addNode(passedNode:UserNode, node:UserNode|null, height:number){
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

        else{
            node.value.push(...passedNode.value);
            node.connectionValue.push(...passedNode.connectionValue);
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
      * Performs a right rotation on the given node for AVL balancing.
      *
      * @param y - The node to rotate right
      * @returns The new root node after rotation
      */
     public rightRotate(y:UserNode | null){
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
      public leftRotate(x:UserNode | null){

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
     * @param node - The node to get the height from
     * @returns The height of the node, or 0 if null
     */
    public getHeight(node: UserNode| null){
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
    public getBalanceFactor(N: UserNode | null){
        if (N == null){
          return 0;
        }

        return this.getHeight(N.leftNode) - this.getHeight(N.rightNode);
      }

    /**
     * Retrieves a node from the tree by its composite key.
     *
     * @param id - The composite key string to search for
     * @param node - The current node being evaluated
     * @returns The matching UserNode if found, null otherwise
     */
    public getFromNode(id: string, node: UserNode | null) :UserNode | null{
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
     * Removes a node from the tree by its composite key.
     *
     * @param passedNode - The current node being evaluated
     * @param id - The composite key string to remove
     * @returns The root node after removal
     *
     * @remarks
     * Implements standard BST deletion with in-order successor replacement.
     */
    public removeNode(passedNode:UserNode|null,id:string){
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
                passedNode.rightNode = this.removeNode(passedNode.rightNode,immediateSuccessor.key);
                return passedNode;

            }
    
    }

  


      /**
       * Counts all nodes below and including the given node.
       *
       * @param root - The root node to start counting from
       * @returns The total number of nodes in the subtree
       *
       * @remarks
       * Recursively traverses the entire subtree to count all nodes.
       */
      countNodeBelow(root:UserNode|null):number{
        if(root==null)
        {
            return 0;
        }

        //recursive call to left child and right child and
        // add the result of these with 1 ( 1 for counting the root)
        return 1 + this.countNodeBelow(root.leftNode) + this.countNodeBelow(root.rightNode);
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
    inOrderSuccessor(root:UserNode){
        while (root.leftNode != null) {
            root = root.leftNode;
        }
        return root;
    }



}