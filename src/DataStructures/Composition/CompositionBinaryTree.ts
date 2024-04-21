import { Composition } from './Composition'
import { CompositionNode } from './CompositionNode'

export class CompositionBinaryTree {
  // this is a binary tree to hold compositions in it
  static root: CompositionNode | null = null

  static addNodeToTree(node: CompositionNode) {
    if (this.root == null) {
      this.root = node
      return this.root
    } else {
      this.root = this.root.addNode(node, this.root, this.root.height)
    }
  }

  static addCompositionToTree(composition: Composition) {
    const node: CompositionNode = new CompositionNode(
      composition.id,
      composition,
      null,
      null,
    )
    this.addNodeToTree(node)
  }

  static async getNodeFromTree(id: number) {
    if (this.root) {
      const Node = this.root.getFromNode(id, this.root)
      return Node
    }
    return null
  }

  static async removeNodeFromTree(id: number) {
    if (this.root) {
      this.root = this.root.removeNode(this.root, id)
    }
  }

  static countNumberOfNodes() {
    if (this.root) {
      return this.root.countNodeBelow(this.root)
    }
    return 0
  }
}
