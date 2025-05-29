import { WidgetDetails } from "./WidgetDetails";
import { WidgetNode } from "./WidgetNode";

export class WidgetCache{
    static root: WidgetNode | null = null;

    static addNodeToTree(node:WidgetNode){
        if(this.root == null){
            this.root = node;
            return this.root;
        }
        else{
            this.root = this.root.addNode(node,this.root,this.root.height);
        }
    }




    static addWidgetToTree(widgetDetails:WidgetDetails){
        let node: WidgetNode = new WidgetNode(widgetDetails.widgetId, widgetDetails, null, null);
        this.addNodeToTree(node);
    }

    static async getNodeFromTree(id:number){
        if(this.root){
            let Node = this.root.getFromNode(id, this.root);
            return Node;
        }
        return null;
    }
    

    static async removeNodeFromTree(id:number){
        if(this.root){
            //  dispatchEvent(event);
            this.root = this.root.removeNode(this.root,id);
        }
    }





    static countNumberOfNodes(){
        if(this.root){
            return this.root.countNodeBelow(this.root);

        }
        return 0;
    }






}