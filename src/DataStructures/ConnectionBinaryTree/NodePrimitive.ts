export class NodePrimitive{
    key: string = "";

    value: number[] = [];

    height:number = 1;

    leftNode: any | null;
    rightNode: any | null;

    constructor(key: any, value: number[], leftNode: NodePrimitive | null, rightNode: NodePrimitive | null){
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }

    public getFromNode(id: any, node: any | null) :any | null{
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

    public rightRotate(y:NodePrimitive | null){
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

      public leftRotate(x:NodePrimitive | null){

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
      

    public getHeight(node: NodePrimitive| null){
        if(node){
            return node.height;
        }   
        return 0;
    }

    public getBalanceFactor(N: NodePrimitive | null){
        if (N == null){
          return 0;
        }
        
        return this.getHeight(N.leftNode) - this.getHeight(N.rightNode);
      }

      public removeNode(passedNode:any|null,id:number){
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
            let immediateSuccessor =  this.inOrderSuccessor(passedNode.rightNode);
            passedNode.value = immediateSuccessor.value;
            passedNode.key = immediateSuccessor.key;
            passedNode.variants = immediateSuccessor.variants;
            passedNode.currentNode = immediateSuccessor.currentNode;
            passedNode.rightNode = this.removeNode(passedNode.rightNode,immediateSuccessor.key);
            return passedNode;

        }

}

inOrderSuccessor(root:any){
    while (root.leftNode != null) {
        root = root.leftNode;
    }
    return root;
}

}