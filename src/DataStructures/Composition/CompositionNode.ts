/**
 * @fileoverview Node implementation for the CompositionBinaryTree.
 * This module provides the CompositionNode class with AVL tree operations and automatic expiration.
 * @module DataStructures/Composition/CompositionNode
 */

import { Composition } from './Composition'
import { CompositionBinaryTree } from './CompositionBinaryTree'

/**
 * Represents a node in the composition binary tree with time-based expiration.
 *
 * @remarks
 * CompositionNode implements an AVL tree node specifically for Composition objects.
 * Each node has a 10-minute expiration time for automatic cache invalidation.
 * The node supports all standard AVL tree operations including rotations and balancing.
 *
 * @example
 * ```typescript
 * const composition = new Composition();
 * const node = new CompositionNode(123, composition, null, null);
 * if (node.isValid()) {
 *   console.log("Node is still valid");
 * }
 * ```
 */
export class CompositionNode {
  /**
   * The expiration timestamp for this node.
   * Defaults to 10 minutes from creation time.
   */
  expiryTime: Date = new Date(Date.now() + 10 * 60 * 1000)

  /**
   * The unique key used for tree ordering (composition ID).
   */
  key: number

  /**
   * The Composition object stored in this node.
   */
  value: Composition

  /**
   * Reference to the left child node.
   * Null if no left child exists.
   */
  leftNode: CompositionNode | null

  /**
   * Reference to the right child node.
   * Null if no right child exists.
   */
  rightNode: CompositionNode | null

  /**
   * The height of this node in the tree.
   * Used for AVL tree balancing calculations.
   */
  height: number = 1

  /**
   * Creates a new CompositionNode.
   *
   * @param key - The unique identifier for this node (composition ID)
   * @param value - The Composition object to store
   * @param leftNode - The left child node (or null)
   * @param rightNode - The right child node (or null)
   *
   * @example
   * ```typescript
   * const node = new CompositionNode(123, composition, null, null);
   * ```
   */
  constructor(
    key: number,
    value: Composition,
    leftNode: CompositionNode | null,
    rightNode: CompositionNode | null,
  ) {
    this.key = key
    this.value = value
    this.leftNode = leftNode
    this.rightNode = rightNode
  }

  /**
   * Checks if this node is still valid (not expired).
   *
   * @returns True if the node is valid, false if expired
   *
   * @remarks
   * If the node has expired, it automatically removes itself from the tree.
   * This ensures automatic cache invalidation after 10 minutes.
   *
   * @example
   * ```typescript
   * if (node.isValid()) {
   *   console.log("Node data is still fresh");
   * } else {
   *   console.log("Node has expired and been removed");
   * }
   * ```
   */
  public isValid() {
    const currentTime = new Date(Date.now())
    if (this.expiryTime < currentTime) {
      CompositionBinaryTree.removeNodeFromTree(this.key)
      return false
    }
    return true
  }

  /**
   * Saves data to the composition's cache.
   *
   * @param data - The data to be cached in the composition
   *
   * @remarks
   * This is a convenience method to update the cached property of the stored composition.
   *
   * @example
   * ```typescript
   * node.saveToCache({ processed: true, data: [...] });
   * ```
   */
  public saveToCache(data: any) {
    this.value.cached = data
  }

  /**
   * Adds a new node to the tree with AVL balancing.
   *
   * @param passedNode - The node to be added
   * @param node - The current node being evaluated
   * @param height - The height of the current node
   * @returns The root node after insertion and balancing
   *
   * @remarks
   * This method implements the AVL tree insertion algorithm with automatic balancing.
   * Performs left and right rotations as needed to maintain O(log n) performance.
   * Also validates nodes during insertion to remove expired entries.
   *
   * @example
   * ```typescript
   * const newNode = new CompositionNode(456, newComposition, null, null);
   * node.addNode(newNode, node, node.height);
   * ```
   */
  public addNode(
    passedNode: CompositionNode,
    node: CompositionNode | null,
    height: number,
  ) {
    if (node == null) {
      node = passedNode
      return node
    }

    const LeftNode = node.leftNode
    const RightNode = node.rightNode

    if (node.key > passedNode.key) {
      node.leftNode = this.addNode(passedNode, LeftNode, height)
    } else if (node.key < passedNode.key) {
      node.rightNode = this.addNode(passedNode, RightNode, height)
    }

    // else if (node.key == passedNode.key && node.key != ""){
    //     node.currentNode = passedNode;
    // }
    else {
      this.isValid()
      node = passedNode
      return node
    }

    node.height =
      1 +
      Math.max(this.getHeight(node.leftNode), this.getHeight(node.rightNode))

    const balancingFactor = this.getBalanceFactor(node)
    if (balancingFactor > 1) {
      if (node.leftNode) {
        if (passedNode.key < node.leftNode.key) {
          return this.rightRotate(node)
        } else if (passedNode.key > node.leftNode.key) {
          node.leftNode = this.leftRotate(node.leftNode)
          return this.rightRotate(node)
        }
      }
    }

    if (balancingFactor < -1) {
      if (node.rightNode) {
        if (passedNode.key > node.rightNode.key) {
          return this.leftRotate(node)
        } else if (passedNode.key < node.rightNode.key) {
          node.rightNode = this.rightRotate(node.rightNode)
          return this.leftRotate(node)
        }
      }
    }
    this.isValid()
    return node
  }

  /**
   * Performs a right rotation on the given node.
   *
   * @param y - The node to rotate right
   * @returns The new root node after rotation
   *
   * @remarks
   * Right rotation is an AVL tree operation used to rebalance the tree when
   * the left subtree is too heavy. Updates heights after rotation.
   */
  public rightRotate(y: CompositionNode | null) {
    if (y) {
      const x = y.leftNode
      if (x) {
        const T2 = x.rightNode

        y.leftNode = T2

        x.rightNode = y
        y.height =
          Math.max(this.getHeight(y.leftNode), this.getHeight(y.rightNode)) + 1

        x.height =
          Math.max(this.getHeight(x.leftNode), this.getHeight(x.rightNode)) + 1
        return x
      }
      // return x;
    }
    return y
  }

  /**
   * Performs a left rotation on the given node.
   *
   * @param x - The node to rotate left
   * @returns The new root node after rotation
   *
   * @remarks
   * Left rotation is an AVL tree operation used to rebalance the tree when
   * the right subtree is too heavy. Updates heights after rotation.
   */
  public leftRotate(x: CompositionNode | null) {
    if (x) {
      const y = x.rightNode
      if (y) {
        const T2 = y.leftNode
        y.leftNode = x
        x.rightNode = T2
        x.height = Math.max(
          this.getHeight(x.leftNode),
          this.getHeight(x.rightNode)
        ) + 1;
        y.height = Math.max(
          this.getHeight(y.leftNode),
          this.getHeight(x.rightNode)
        ) + 1;
        return y
      }
      //return y;
    }
    return x
  }

  /**
   * Gets the height of a node.
   *
   * @param node - The node to get the height from
   * @returns The height of the node, or 0 if null
   *
   * @remarks
   * Height is used for AVL tree balancing calculations.
   */
  public getHeight(node: CompositionNode | null) {
    if (node) {
      return node.height
    }
    return 0
  }

  /**
   * Calculates the balance factor of a node.
   *
   * @param N - The node to calculate the balance factor for
   * @returns The balance factor (difference between left and right heights)
   *
   * @remarks
   * Balance factor is used to determine if rotations are needed.
   * Values > 1 or < -1 indicate an unbalanced tree.
   */
  public getBalanceFactor(N: CompositionNode | null) {
    if (N == null) {
      return 0
    }

    return this.getHeight(N.leftNode) - this.getHeight(N.rightNode)
  }

  /**
   * Retrieves a node from the tree by its ID.
   *
   * @param id - The composition ID to search for
   * @param node - The current node being evaluated
   * @returns The matching CompositionNode if found and valid, null otherwise
   *
   * @remarks
   * Performs a binary search through the tree. Validates nodes during retrieval.
   *
   * @example
   * ```typescript
   * const foundNode = node.getFromNode(123, rootNode);
   * ```
   */
  public getFromNode(
    id: number,
    node: CompositionNode | null,
  ): CompositionNode | null {
    if (node) {
      if (id == node.key && node.isValid()) {
        return node
      } else if (id < node.key) {
        return this.getFromNode(id, node.leftNode)
      } else if (id > node.key) {
        return this.getFromNode(id, node.rightNode)
      }
      return node
    }
    return node
  }

  /**
   * Removes a node from the tree by its ID.
   *
   * @param passedNode - The current node being evaluated
   * @param id - The composition ID to remove
   * @returns The root node after removal
   *
   * @remarks
   * Implements standard BST deletion with in-order successor replacement.
   * Maintains tree structure by replacing removed nodes with their successors.
   *
   * @example
   * ```typescript
   * const newRoot = node.removeNode(rootNode, 123);
   * ```
   */
  public removeNode(passedNode: CompositionNode | null, id: number) {
    if (passedNode == null) {
      return passedNode
    }
    if (passedNode.key > id) {
      passedNode.leftNode = this.removeNode(passedNode.leftNode, id)
      return passedNode
    } else if (passedNode.key < id) {
      passedNode.rightNode = this.removeNode(passedNode.rightNode, id)
      return passedNode
    }

    if (passedNode.leftNode == null) {
      const temp = passedNode.rightNode
      passedNode = null
      return temp
    } else if (passedNode.rightNode == null) {
      const temp = passedNode.leftNode
      passedNode = null
      return temp
    } else {
      // passing the rightNode to the inOrderSuccessor gives the immediate successor of the node
      const immediateSuccessor = this.inOrderSuccessor(passedNode.rightNode)
      passedNode.value = immediateSuccessor.value
      passedNode.key = immediateSuccessor.key
      passedNode.rightNode = this.removeNode(
        passedNode.rightNode,
        immediateSuccessor.key,
      )
      return passedNode
    }
  }

  /**
   * Counts all nodes below and including the given node.
   *
   * @param root - The root node to start counting from
   * @returns The total number of nodes in the subtree
   *
   * @remarks
   * Recursively traverses the entire subtree to count all nodes.
   *
   * @example
   * ```typescript
   * const count = node.countNodeBelow(rootNode);
   * console.log(`Subtree contains ${count} nodes`);
   * ```
   */
  countNodeBelow(root: CompositionNode | null): number {
    if (root == null) {
      return 0
    }

    //recursive call to left child and right child and
    // add the result of these with 1 ( 1 for counting the root)
    return (
      1 +
      this.countNodeBelow(root.leftNode) +
      this.countNodeBelow(root.rightNode)
    )
  }

  /**
   * Finds the in-order successor of a node.
   *
   * @param root - The node to find the successor from
   * @returns The in-order successor node (leftmost node in right subtree)
   *
   * @remarks
   * Used during node deletion to find the replacement node.
   * Traverses left until finding a node with no left child.
   */
  inOrderSuccessor(root: CompositionNode) {
    while (root.leftNode != null) {
      root = root.leftNode
    }
    return root
  }
}
