import { NodePrimitive } from "./NodePrimitive";

export class ConnectionOfNode extends NodePrimitive{
    key: string = "";

    value: number[] = [];

    height:number = 1;

    leftNode: ConnectionOfNode | null;
    rightNode: ConnectionOfNode | null;


    constructor(key: any, value: number[], leftNode: ConnectionOfNode | null, rightNode: ConnectionOfNode | null){
        
        super(key, value, leftNode, rightNode);
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }



    public addNode(passedNode: ConnectionOfNode, node: ConnectionOfNode | null, height: number){
        if(node == null){
            node= passedNode;
            return node;
        }

        let LeftNode = node.leftNode;
        let RightNode = node.rightNode;
        if(node.key > passedNode.key){
            node.leftNode = this.addNode(passedNode,LeftNode,height);
        }
        else if( node.key <  passedNode.key){
            node.rightNode = this.addNode(passedNode, RightNode, height);
        }
        else{
            return node;
        }
        node.height = 1 + Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode));
        let balancingFactor = this.getBalanceFactor(node);
        if(balancingFactor > 1){
            if(node.leftNode){
                if(passedNode.key < node.leftNode.key){
                    let returner =  this.rightRotate(node);
                   return returner;
                }
                else if(passedNode.key > node.leftNode.key){
                    node.leftNode = this.leftRotate(node.leftNode);
                    let returner =  this.rightRotate(node);
                        return returner;
                }
            }

        }
        if(balancingFactor < -1){
            if(node.rightNode){
                if(passedNode.key > node.rightNode.key){

                    let returner =  this.leftRotate(node);
                    return returner;
                }
                else if (passedNode.key < node.rightNode.key){
                    node.rightNode = this.rightRotate(node.rightNode);
                    let returner = this.leftRotate(node);
                    return returner;
                }
            }
        }
        return node;
    }




}