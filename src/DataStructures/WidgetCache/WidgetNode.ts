import { WidgetDetails } from "./WidgetDetails";

export class WidgetNode{
    key:any;
    value:WidgetDetails;
    leftNode: WidgetNode | null;
    rightNode: WidgetNode | null;
    height:number = 1;

    constructor(key:any, value:WidgetDetails, leftNode: WidgetNode | null, rightNode:WidgetNode| null){
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }




     public addNode(passedNode:WidgetNode, node:WidgetNode|null, height:number){
        if(node  == null){
            node = passedNode;
            return node;
        }

        let LeftNode = node.leftNode;
        let RightNode = node.rightNode;

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


     public rightRotate(y:WidgetNode | null){
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

      public leftRotate(x:WidgetNode | null){

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
      

    public getHeight(node: WidgetNode| null){
        if(node){
            return node.height;
        }   
        return 0;
    }

    public getBalanceFactor(N: WidgetNode | null){
        if (N == null){
          return 0;
        }
        
        return this.getHeight(N.leftNode) - this.getHeight(N.rightNode);
      }

    public getFromNode(id: number, node: WidgetNode | null) :WidgetNode | null{
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





    public removeNode(passedNode:WidgetNode|null,id:number){
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
                passedNode.rightNode = this.removeNode(passedNode.rightNode,immediateSuccessor.key);
                return passedNode;

            }
    
    }



      countNodeBelow(root:WidgetNode|null):number{
        if(root==null)
        {
            return 0;
        }

        //recursive call to left child and right child and
        // add the result of these with 1 ( 1 for counting the root)
        return 1 + this.countNodeBelow(root.leftNode) + this.countNodeBelow(root.rightNode);
    }

    inOrderSuccessor(root:WidgetNode){
        while (root.leftNode != null) {
            root = root.leftNode;
        }
        return root;
    }



}