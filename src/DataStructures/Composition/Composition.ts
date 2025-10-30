/**
 * @fileoverview Composition data structure for managing complex concept relationships.
 * This module provides the core Composition class for building and managing hierarchical
 * concept structures with caching and distributed system synchronization.
 * @module DataStructures/Composition/Composition
 */

import { recursiveFetchNew } from '../../Services/Composition/BuildComposition';
import { Connection } from '../../DataStructures/Connection';
import { Concept } from '../../DataStructures/Concept';
import { CreateDefaultConcept } from '../../Services/CreateDefaultConcept';
import { publishMessage } from '../../Services/Mqtt/publishMessage';

/**
 * Represents a composition of concepts and their relationships.
 *
 * @remarks
 * A Composition is a hierarchical structure that combines multiple concepts through connections.
 * It supports caching for performance optimization and can synchronize updates across distributed systems
 * via MQTT messaging. Compositions can contain subcompositions for complex nested structures.
 *
 * @example
 * ```typescript
 * const composition = new Composition();
 * composition.id = 123;
 * composition.mainConcept = myConcept;
 * await composition.updateCache();
 * const data = composition.GetDataCache();
 * ```
 */
export class Composition {
  /**
   * Unique identifier for this composition.
   */
  id: number = 0

  /**
   * The primary concept at the root of this composition.
   * Defaults to a default concept if not set.
   */
  mainConcept: Concept = CreateDefaultConcept()

  /**
   * Array of connections between concepts in this composition.
   */
  connections: Connection[] = []

  /**
   * Array of all concepts included in this composition.
   */
  concepts: Concept[] = []

  /**
   * Array of IDs referencing nested subcompositions.
   */
  subcompositions: number[] = []

  /**
   * Cached composition data for performance optimization.
   * Stores the processed composition structure.
   */
  cached: any = {}

  /**
   * Updates the composition cache by recursively fetching related data.
   *
   * @returns A promise that resolves when the cache is updated
   *
   * @remarks
   * This method performs the following operations:
   * 1. Sets the mainConcept if not already set (by matching ID with concepts array)
   * 2. Recursively fetches all related concepts, connections, and subcompositions
   * 3. Stores the result in the cached property for fast retrieval
   *
   * @example
   * ```typescript
   * await composition.updateCache();
   * console.log("Cache updated:", composition.cached);
   * ```
   */
  async updateCache() {
    if (this.mainConcept.id == 0)
      for (let i = 0; i < this.concepts.length; i++) {
        if (this.concepts[i].id == this.id) {
          this.mainConcept = this.concepts[i]
        }
      }
    let visitedConcepts: number[] = [];
    this.cached = await recursiveFetchNew(
      this.id,
      this.connections,
      this.concepts,
      this.subcompositions,
      visitedConcepts
    )
  }

  /**
   * Publishes a composition update message to the distributed system.
   *
   * @remarks
   * This method broadcasts an update notification via MQTT to inform other
   * system components that this composition has been modified. Only publishes
   * if the composition has a valid (non-zero) ID.
   *
   * @example
   * ```typescript
   * composition.UpdateAcrossDistributedSystem();
   * // Other system nodes will receive the update notification
   * ```
   */
  UpdateAcrossDistributedSystem() {
    try {
      if (this.id != 0) {
        publishMessage('compositionUpdate', this.id?.toString())
      }
    } catch (ex) {
      console.log('Error while publishing message', ex)
    }
  }

  /**
   * Triggers a distributed system update notification.
   *
   * @remarks
   * This is a convenience method that calls UpdateAcrossDistributedSystem.
   * Indicates that the composition is being updated and needs to notify other system nodes.
   *
   * @example
   * ```typescript
   * composition.isUpdating();
   * ```
   */
  isUpdating() {
    this.UpdateAcrossDistributedSystem()
  }

  /**
   * Retrieves the cached composition data in a structured format.
   *
   * @returns An object containing the formatted cache data with the composition ID
   *
   * @remarks
   * The returned object has the following structure:
   * - `data`: An object keyed by the main concept's type characterValue
   * - `id`: The composition's ID
   *
   * @example
   * ```typescript
   * const cacheData = composition.GetDataCache();
   * console.log("Composition ID:", cacheData.id);
   * console.log("Cached data:", cacheData.data);
   * ```
   */
  GetDataCache() {
    const returnOutput: any = {}
    const mainString = this.mainConcept?.type?.characterValue ?? ''
    returnOutput[mainString] = this.cached
    const FinalReturn: any = {}
    FinalReturn['data'] = returnOutput
    FinalReturn['id'] = this.id
    return FinalReturn
  }
}
