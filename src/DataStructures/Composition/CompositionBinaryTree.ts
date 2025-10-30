/**
 * @fileoverview Binary tree data structure for managing compositions.
 * This module provides an efficient AVL tree implementation for storing and retrieving compositions.
 * @module DataStructures/Composition/CompositionBinaryTree
 */

import { Composition } from './Composition'
import { CompositionNode } from './CompositionNode'

/**
 * Binary tree data structure for managing compositions with automatic expiration.
 *
 * @remarks
 * This class implements an AVL tree specifically designed for storing Composition objects.
 * Each node in the tree has an expiration time, allowing automatic cache invalidation.
 * The tree provides O(log n) operations for insert, search, and delete.
 *
 * @example
 * ```typescript
 * const composition = new Composition();
 * composition.id = 123;
 * CompositionBinaryTree.addCompositionToTree(composition);
 * const node = await CompositionBinaryTree.getNodeFromTree(123);
 * ```
 */
export class CompositionBinaryTree {
  /**
   * The root node of the composition binary tree.
   * Null if the tree is empty.
   */
  static root: CompositionNode | null = null

  /**
   * Adds a composition node to the binary tree.
   *
   * @param node - The CompositionNode to be added to the tree
   * @returns The root node after insertion
   *
   * @remarks
   * If the tree is empty, the provided node becomes the root.
   * Otherwise, the node is inserted using AVL tree balancing algorithm.
   *
   * @example
   * ```typescript
   * const node = new CompositionNode(123, composition, null, null);
   * CompositionBinaryTree.addNodeToTree(node);
   * ```
   */
  static addNodeToTree(node: CompositionNode) {
    if (this.root == null) {
      this.root = node
      return this.root
    } else {
      this.root = this.root.addNode(node, this.root, this.root.height)
    }
  }

  /**
   * Creates a node from a composition and adds it to the tree.
   *
   * @param composition - The Composition object to be added to the tree
   *
   * @remarks
   * This is a convenience method that wraps the composition in a CompositionNode
   * and adds it to the tree. The node is keyed by the composition's ID.
   *
   * @example
   * ```typescript
   * const composition = new Composition();
   * composition.id = 123;
   * CompositionBinaryTree.addCompositionToTree(composition);
   * ```
   */
  static addCompositionToTree(composition: Composition) {
    const node: CompositionNode = new CompositionNode(
      composition.id,
      composition,
      null,
      null,
    )
    this.addNodeToTree(node)
  }

  /**
   * Retrieves a composition node from the tree by its ID.
   *
   * @param id - The numeric ID of the composition to retrieve
   * @returns The CompositionNode if found and valid, null otherwise
   *
   * @remarks
   * This method performs a binary search through the tree.
   * The node's validity is checked during retrieval (expiration check).
   *
   * @example
   * ```typescript
   * const node = await CompositionBinaryTree.getNodeFromTree(123);
   * if (node) {
   *   console.log("Found composition:", node.value);
   * }
   * ```
   */
  static async getNodeFromTree(id: number) {
    if (this.root) {
      const Node = this.root.getFromNode(id, this.root)
      return Node
    }
    return null
  }

  /**
   * Removes a composition node from the tree by its ID.
   *
   * @param id - The numeric ID of the composition to remove
   *
   * @remarks
   * This method removes a node from the tree while maintaining AVL balance.
   * The tree is automatically rebalanced after removal.
   *
   * @example
   * ```typescript
   * await CompositionBinaryTree.removeNodeFromTree(123);
   * ```
   */
  static async removeNodeFromTree(id: number) {
    if (this.root) {
      this.root = this.root.removeNode(this.root, id)
    }
  }

  /**
   * Counts the total number of nodes in the tree.
   *
   * @returns The total number of composition nodes in the tree
   *
   * @remarks
   * This method recursively traverses the entire tree to count all nodes.
   * Returns 0 if the tree is empty.
   *
   * @example
   * ```typescript
   * const count = CompositionBinaryTree.countNumberOfNodes();
   * console.log(`Tree contains ${count} compositions`);
   * ```
   */
  static countNumberOfNodes() {
    if (this.root) {
      return this.root.countNodeBelow(this.root)
    }
    return 0
  }
}
