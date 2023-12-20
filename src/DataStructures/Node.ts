import { Concept } from "./Concept";

export class Node{
    key:any;
    value:Concept;
    leftNode: Node | null;
    rightNode: Node | null;
    currentNode: Node | null;
    variants: Node [] = [] ;
    height:number = 1;

    constructor(key:any, value:Concept, leftNode: Node | null, rightNode:Node| null){
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
        this.currentNode = null;
    }

    public addCurrentNode(passedNode:Node, node:Node|null){
        if(node == null){
            node = passedNode;
            return node;
        }
        if(passedNode.value.typeId != node.value.typeId ){
            node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
        }
        return node;
    }

    public addCurrentNodeType(passedNode:Node, node:Node|null){
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

    public addCharacterNode(passedNode:Node, node:Node|null, height:number){
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
            if (node.key == passedNode.key && node.key != ""){
                    node.currentNode = this.addCurrentNode(passedNode, node.currentNode);
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

    public addTypeNode(passedNode:Node, node:Node|null, height:number){
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

     public rightRotate(y:Node | null){
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

      public leftRotate(x:Node | null){

        if(x){
            let y = x.rightNode;
            if(y){
                let T2 = y.leftNode;
                y.leftNode = x;
                x.rightNode = T2;
                x.height = Math.max(this.getHeight(x.leftNode),this.getHeight(x.rightNode) + 1);
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(x.rightNode) + 1);
                return y;
            }
            //return y;
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

    public getCharacterFromNode(value: string, node: Node | null) :Node | null{
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

    public getFromNodeWithCharacter(value: string, node: Node | null) :Node | null{
        if(node){
            if( value == node.value.characterValue){
                return node;
            }
            var leftNode =   this.getFromNodeWithCharacter(value, node.leftNode);
            var rightNode = this.getFromNodeWithCharacter(value, node.rightNode);
                
            if(leftNode){
                return leftNode;
            }
            else if(rightNode){
                return rightNode;
            }
            else{
                return null;
            }
        }
        return node;

    }

    
    public getFromNodeWithCharacterAndType(value: string, typeId: number, node: Node | null) :Node | null{
        value = `${value}`;
        if(node){
            if(value == node.key){

                if( value == node.value.characterValue && typeId == node.value.typeId){
                    return node;
                }
                else{

                    return this.getFromNodeWithCharacterAndType(value, typeId, node.currentNode);
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



}