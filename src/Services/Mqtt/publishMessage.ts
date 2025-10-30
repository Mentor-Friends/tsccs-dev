/**
 * @module publishMessage
 * @description Provides MQTT message publishing functionality for real-time communication
 */

import { BaseUrl } from "../../DataStructures/BaseUrl";

/**
 * Publishes a message to an MQTT topic if a connection is established.
 * Used for real-time notifications and updates across the system.
 *
 * @param {string} topic - The MQTT topic to publish to
 * @param {any} message - The message payload to publish
 *
 * @example
 * ```typescript
 * // Publish a composition update notification
 * publishMessage("compositionUpdate", "123");
 *
 * // Publish a complex message
 * publishMessage("user/notifications", { type: "follow", userId: 456 });
 * ```
 *
 * @remarks
 * - Only publishes if BaseUrl.MQTT_CONNECTION is available
 * - No-op if MQTT connection is not established
 * - No return value (void function)
 * - Message format depends on subscriber expectations
 * - Used for cache invalidation and real-time updates
 */
export function publishMessage(topic:string, message: any){
        if(BaseUrl.MQTT_CONNECTION){
                BaseUrl.MQTT_CONNECTION.publish(topic, message);
        }

}