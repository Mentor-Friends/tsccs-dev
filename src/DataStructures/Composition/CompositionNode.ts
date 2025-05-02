import { Composition } from './Composition'
import { CompositionBinaryTree } from './CompositionBinaryTree'

export class CompositionNode {
  expiryTime: Date = new Date(Date.now() + 10 * 60 * 1000)
  key: number
  value: Composition

  leftNode: CompositionNode | null
  rightNode: CompositionNode | null
  height: number = 1

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

  public isValid() {
    const currentTime = new Date(Date.now())
    if (this.expiryTime < currentTime) {
      CompositionBinaryTree.removeNodeFromTree(this.key)
      return false
    }
    return true
  }

  public saveToCache(data: any) {
    this.value.cached = data
  }

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

  public getHeight(node: CompositionNode | null) {
    if (node) {
      return node.height
    }
    return 0
  }

  public getBalanceFactor(N: CompositionNode | null) {
    if (N == null) {
      return 0
    }

    return this.getHeight(N.leftNode) - this.getHeight(N.rightNode)
  }

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

  inOrderSuccessor(root: CompositionNode) {
    while (root.leftNode != null) {
      root = root.leftNode
    }
    return root
  }
}
