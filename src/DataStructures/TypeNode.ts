import { Concept } from "./Concept";

export class TypeNode{
    key:any;
    value:number[] = [];
    leftNode: TypeNode | null;
    rightNode: TypeNode | null;
    currentNode: TypeNode | null;
    height:number = 1;

    constructor(key:any, value:number){
        this.key = key;
        this.value.push(value);
        this.leftNode = null;
        this.rightNode = null;
        this.currentNode = null;
    }

    public addType(node: TypeNode | null, key: number, value: number){
        if(node == null){
            return new TypeNode(key, value);
        }        
        
        if (key < node.key) {
            node.leftNode = this.addType(node.leftNode, key, value);
        } else if (key > node.key) {
            node.rightNode = this.addType(node.rightNode, key, value);
        } else {
            // If key already exists, insert unique value into the set
            node.value.push(value);
            return node;
        }

                // Step 2: Update height of this ancestor node
                node.height = Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode)) + 1;

                // Step 3: Get the balance factor to check if this node became unbalanced
                const balance = this.getBalanceFactor(node);

                        // Step 4: If the node is unbalanced, perform rotations

        // Left Left Case (Right Rotation)
        if (balance > 1 && key < node.leftNode?.key) {
            return this.rightRotate(node);
        }

        // Right Right Case (Left Rotation)
        if (balance < -1 && key > node.rightNode?.key) {
            return this.leftRotate(node);
        }

        // Left Right Case (Left rotation, then right rotation)
        if (balance > 1 && key > node.leftNode?.key) {
            node.leftNode = this.leftRotate(node.leftNode);
            return this.rightRotate(node);
        }

        // Right Left Case (Right rotation, then left rotation)
        if (balance < -1 && key < node.rightNode?.key) {
            node.rightNode = this.rightRotate(node.rightNode);
            return this.leftRotate(node);
        }


        return node;
    }


    




     public rightRotate(y:TypeNode | null){
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

      public leftRotate(x:TypeNode | null){

        if(x){
            let y = x.rightNode;
            if(y){
                let T2 = y.leftNode;
                y.leftNode = x;
                x.rightNode = T2;
                x.height = Math.max(this.getHeight(x.leftNode),this.getHeight(x.rightNode)) + 1;
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(x.rightNode)) + 1;
                return y;
            }
            //return y;
        }
        return x;

      }
      

    public getHeight(node: TypeNode| null){
        if(node){
            return node.height;
        }   
        return 0;
    }

    public getBalanceFactor(N: TypeNode | null){
        if (N == null){
          return 0;
        }
        
        return this.getHeight(N.leftNode) - this.getHeight(N.rightNode);
      }

    public getFromNode(id: number, node: TypeNode | null) :TypeNode | null{
        if(node){
            if(id == node.key){
                // if(node.value.count){
                //     node.value.count++ ;
                // }
                // else{
                //     node.value.count = 1;
                // }
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







    




    public removeNodeWithVariants(passedNode:TypeNode|null,key:any, conceptId:number){
        if(passedNode == null){
            return passedNode;
        }
        if(passedNode.key > key){
            passedNode.leftNode = this.removeNodeWithVariants(passedNode.leftNode, key,conceptId);
            return passedNode;
        }
        else if(passedNode.key < key){
            passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode,key,conceptId);
            return passedNode;
        }

        if(passedNode.value.length > 0){

            

                // in the condition that the main node is not equal to the checking value 
                for(let i=0; i<passedNode.value.length; i++){
                    if(conceptId == passedNode.value[i]){
                        passedNode.value.splice(i, 1);
                        return passedNode;
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
            let immediateSuccessor =  this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.currentNode = immediateSuccessor.currentNode;
            passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode,immediateSuccessor.key,conceptId);
            return passedNode;

        }

}


      countNodeBelow(root:TypeNode|null):number{
        if(root==null)
        {
            return 0;
        }

        //recursive call to left child and right child and
        // add the result of these with 1 ( 1 for counting the root)
        return 1 + this.countNodeBelow(root.leftNode) + this.countNodeBelow(root.rightNode);
    }

    inOrderSuccessor(root:TypeNode){
        while (root.leftNode != null) {
            root = root.leftNode;
        }
        return root;
    }



}