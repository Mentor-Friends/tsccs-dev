/**
 * @module subscribeMessage
 * @description Provides MQTT message subscription functionality for real-time cache invalidation (Currently commented out/unused)
 */

/**
 * MQTT message subscription handler (Currently disabled).
 * When enabled, this function would subscribe to MQTT topics and handle incoming messages.
 *
 * @remarks
 * This functionality is currently commented out and not in use.
 * When enabled, it would:
 * - Subscribe to MQTT message events
 * - Listen for "compositionUpdate" topic
 * - Parse composition IDs from messages
 * - Remove compositions from cache (CompositionBinaryTree)
 * - Provide real-time cache invalidation when compositions change
 *
 * To enable:
 * 1. Uncomment the function code
 * 2. Ensure global.mqttconn is properly initialized
 * 3. Import CompositionBinaryTree
 * 4. Set up proper MQTT connection management
 */

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