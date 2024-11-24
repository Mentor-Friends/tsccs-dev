import {  Connection } from "./../Connection";

export class ConnectionNode{
    key:any;
    value:Connection;
    leftNode: ConnectionNode | null;
    rightNode: ConnectionNode | null;
    currentNode: ConnectionNode | null;
    variants: ConnectionNode [] = [] ;
    height:number = 1;

    constructor(key:any, value:Connection, leftNode: ConnectionNode | null, rightNode:ConnectionNode| null){
        this.key = key;
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
        this.currentNode = null;
    }



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

    public addCurrentNodeType(passedNode:ConnectionNode, node:ConnectionNode|null){
        if(node == null){
            node = passedNode;
            return node;
        }
        let contains = false;
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

     public addNode(passedNode:ConnectionNode, node:ConnectionNode|null, height:number){
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


    public addTypeNode(passedNode:ConnectionNode, node:ConnectionNode|null, height:number){
        let debugFlag = false;
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

        let LeftNode = node.leftNode;
        let RightNode = node.rightNode;

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
                    let returner =  this.rightRotate(node);
                   if(debugFlag){
                    console.log("returning here 1 ",returner);
                   }
                   return returner;
                }
                else if(passedNode.key > node.leftNode.key){
                    node.leftNode = this.leftRotate(node.leftNode);
                    let returner =  this.rightRotate(node);
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

                    let returner =  this.leftRotate(node);
                    if(debugFlag){
                        console.log("returning here 3 ",returner);
                    }
                    return returner;
                }
                else if (passedNode.key < node.rightNode.key){
                    node.rightNode = this.rightRotate(node.rightNode);
                    let returner = this.leftRotate(node);
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

      public leftRotate(x:ConnectionNode | null){

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
      

    public getHeight(node: ConnectionNode| null){
        if(node){
            return node.height;
        }   
        return 0;
    }

    public getBalanceFactor(N: ConnectionNode | null){
        if (N == null){
          return 0;
        }
        
        return this.getHeight(N.leftNode) - this.getHeight(N.rightNode);
      }

    public getFromNode(id: number, node: ConnectionNode | null) :ConnectionNode | null{
        if(node){
            if(id == node.key){
                if(node.value.count){
                    node.value.count++ ;
                }
                else{
                    node.value.count = 1;
                }
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

    public checkIfIdsInNode(node: ConnectionNode | null, ids: number[], connectionArray: Connection[], remainingIds: any){
        if(node){
            if(ids.includes(node.key)){
                connectionArray.push(node.value);
                //remainingIds[node.key] = true;
                let index = ids.indexOf(node.key);
                ids.splice(index, 1);

            }
            if(node.leftNode){
                this.checkIfIdsInNode(node.leftNode, ids, connectionArray, remainingIds);

            }
            if(node.rightNode){
                this.checkIfIdsInNode(node.rightNode, ids, connectionArray, remainingIds);

            }
        }
    }

    public traverse(node: ConnectionNode|null){
        let count = 0;
        if(node){
            count = count + 1;
            if(node?.leftNode){
              count +=  this.traverse(node.leftNode);
            }
            if(node.rightNode){
              count +=  this.traverse(node.rightNode);
            }

        }
        return count ;

    }


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
        //     let newNode = passedNode.variants[0];
        //     if(newNode){
        //         passedNode.value = newNode.value;
        //         passedNode.key = newNode.key;
        //         passedNode.currentNode = newNode.currentNode;
        //         return passedNode;

        //     }
        // }
        /**
         * This is dispatched incase the connection is deleted and others are listening
         */
        let event = new Event(`${passedNode.value.ofTheConceptId}`);
        dispatchEvent(event);
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
            let newNode = passedNode.variants[0];
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
        let immediateSuccessor =  this.inOrderSuccessor(passedNode.rightNode);
        passedNode.value = immediateSuccessor.value;
        passedNode.key = immediateSuccessor.key;
        passedNode.variants = immediateSuccessor.variants;
        passedNode.currentNode = immediateSuccessor.currentNode;
        passedNode.rightNode = this.removeNodeWithVariants(passedNode.rightNode,immediateSuccessor.key,conceptId);
        return passedNode;

    }

}


inOrderSuccessor(root:ConnectionNode){
    while (root.leftNode != null) {
        root = root.leftNode;
    }
    return root;
}




}