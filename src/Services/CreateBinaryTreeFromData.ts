import { BinaryTree } from "../DataStructures/BinaryTree";
import { Node } from "../DataStructures/Node";
import { getFromDatabaseWithTypeOld } from "../app";

export default  async function CreateBinaryTreeFromData(){
    var tree = new BinaryTree();
    var startTime = new Date().getTime();;
    var conceptList = await getFromDatabaseWithTypeOld("concept");
        if(Array.isArray(conceptList)){
            console.log(conceptList);
            for(var i=0 ;i < conceptList.length ;i++){
                let concept = conceptList[i];
                let node = new Node(concept.id, concept, null, null);

                BinaryTree.addNodeToTree(node);
            }

        }
    var endTime = new Date().getTime();
    var time = endTime - startTime;
    console.log("This is the time to create binary tree" + time );
        console.log("this is the root final");
    console.log(BinaryTree.getNodeFromTree(100459665));
    console.log(BinaryTree.root);

}
