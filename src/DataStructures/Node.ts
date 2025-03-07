import { dispatchIdEvent } from "../app";
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
        let contains = false;
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
            dispatchIdEvent(passedNode.key, {detail: passedNode.value})
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
    
    public checkIfIdsInNode(node: Node | null, ids: number[], connectionArray: Concept[], remainingIds: any){
        if(node){
            if(ids.includes(node.key)){
                connectionArray.push(node.value);
               // remainingIds[node.key] = true;
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

    public addCharacterNode(passedNode:Node, node:Node|null, height:number){
        let debugFlag = false;
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

        let LeftNode = node.leftNode;
        let RightNode = node.rightNode;

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

    public addTypeNode(passedNode:Node, node:Node|null, height:number){
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
            console.log("adding the type node to the tree", passedNode);
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
            console.log("adding the type node to the tree down", passedNode);
            if (node.key == passedNode.key && node.key != 0 && node.value.id != passedNode.value.id){
                    node.addCurrentNodeType(passedNode,node);
            }
            console.log("adding the type node to the tree last", node);
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
                x.height = Math.max(this.getHeight(x.leftNode),this.getHeight(x.rightNode)) + 1;
                y.height = Math.max(this.getHeight(y.leftNode), this.getHeight(x.rightNode))  + 1;
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

    public getCharacterFromNodeUpdated(value: string, node: Node | null) :Node | null{
        if(node){
            if(value == node.key || node.value?.typeId == 51){
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



    
    public getFromNodeWithCharacterAndType(value: string, typeId: number, node: Node | null) :Node | null{
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

    public getFromNodeWithCharacterAndCategory(value: string, categoryId: number, node:Node | null) :Node | null{
        value = `${value}`;
        if(node){
            if(value == node.key){

                if( value == node.value.characterValue && categoryId == node.value.categoryId){
                    return node;
                }
                else{
                    for(let i=0;i<node.variants.length;i++){
                        if(node.variants[i].value.categoryId == categoryId){
                            return node.variants[i];
                        }
                    }
                   // return this.getFromNodeWithCharacterAndType(value, typeId, node.currentNode);
                }
            }
            else if(value < node.key){
                return this.getFromNodeWithCharacterAndCategory(value, categoryId, node.leftNode);
            }
            else if (value > node.key) {
                return this.getFromNodeWithCharacterAndCategory(value,categoryId, node.rightNode);
            }
            return null;
        }
        return node;

    }

    public removeNode(passedNode:Node|null,id:number){
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

    public removeNodeWithVariants(passedNode:Node|null,typeIdentifier:any, conceptId:number){
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


      countNodeBelow(root:Node|null):number{
        if(root==null)
        {
            return 0;
        }

        //recursive call to left child and right child and
        // add the result of these with 1 ( 1 for counting the root)
        return 1 + this.countNodeBelow(root.leftNode) + this.countNodeBelow(root.rightNode);
    }

    inOrderSuccessor(root:Node){
        while (root.leftNode != null) {
            root = root.leftNode;
        }
        return root;
    }



}