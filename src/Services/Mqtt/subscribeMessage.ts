// import { CompositionBinaryTree } from "../../Models/BinaryTree/CompositionBinaryTree";


// export function subscribeMessage(){
//     global.mqttconn.on('message', (topic, message) => {
//         console.log(message);
//         if(topic == "compositionUpdate"){
//           var stringBuf = message.toString();
//           let compositionToUpdate = Number(stringBuf);
//           console.log("deleting this composition", compositionToUpdate);
//           CompositionBinaryTree.removeNodeFromTree(compositionToUpdate);
//         }
//       });
      
// }