import { Concept } from "./Concept";

export class Node{
    key:number;
    value:Concept;
    leftNode: Node | null;
    rightNode: Node | null;
    height:number = 1;

    constructor(key:number, value:Concept, leftNode: Node | null, rightNode:Node| null){
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }

     public addNode(passedNode:Node, node:Node|null, height:number){

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

     public rightRotate(y:Node | null){
        if(y){
            let x = y.leftNode;
            if(x){
                let T2 = x.rightNode;

                y.leftNode = T2;
    
                x.rightNode = y;
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(y.rightNode)) + 1;
                        
                x.height = Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode)) + 1;
                
            }
            return x;
        }
        return y;

      }

      public leftRotate(x:Node | null){

        if(x){
            let y = x.rightNode;
            if(y){
                let T2 = y.leftNode;
                y.leftNode = x;
                x.rightNode = T2;
                x.height = Math.max(this.getHeight(x.leftNode),this.getHeight(x.rightNode) + 1);
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(x.rightNode) + 1);
            }
            return y;
        }
        return x;

      }
      

    public getHeight(node: Node| null){
        if(node){
            return node.height;
        }   
        return 0;
    }

    public getBalanceFactor(N: Node | null){
        if (N == null){
          return 0;
        }
        
        return this.getHeight(N.leftNode) - this.getHeight(N.rightNode);
      }

    public getFromNode(id: number, node: Node | null) :Node | null{
        if(node){
            if(id == node.key){
                return node;
            }
            else if(id < this.key){
                return this.getFromNode(id, node.leftNode);
            }
            else if (id > this.key) {
                return this.getFromNode(id, node.rightNode);
            }
            return node;
        }
        return node;

    }



}