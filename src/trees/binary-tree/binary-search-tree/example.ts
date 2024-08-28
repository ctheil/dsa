export default class BST<T> {
  root: TNode<T> | undefined

  constructor() {
    this.root = undefined
  }


  public insert(value: T): void {
    var nnode = newNode(value)
    if (!this.root) {
      this.root = nnode
      return
    }
    this.insert_aux(this.root, nnode)

  }
  private insert_aux(curr: TNode<T>, node: TNode<T>) {
    if (curr.value === node.value) return
    if (node.value > curr.value) { // go right
      if (!curr.right) {
        curr.right = node
        return
      }
      this.insert_aux(curr.right, node)
    } else {
      if (!curr.left) {
        curr.left = node
      }
      this.insert_aux(curr.left, node)
    }
  }

  public delete(value: T): T | undefined {
    if (!this.root) return
    this.root = this.delete_aux(value, this.root)
  }

  private delete_aux(value: T, node: TNode<T> | undefined): TNode<T> | undefined {
    if (!node) return

    if (value > node.value) {
      node.right = this.delete_aux(value, node.right)
    } else if (value < node.value) {
      node.left = this.delete_aux(value, node.left)
    } else {
      // FOUND TARGET NODE
      // Case 3: node has two children
      if (node.left && node.right) {
        const tmp = node
        const successor = this.get_successor(tmp.right!)
        node.value = successor.value
        node.right = this.delete_aux(successor.value, node.right)
      }
      // Case 2: Node has one child:
      else if (node.left) {
        node = node.left
      } else if (node.right) {
        node = node.right
      }
      // Case 1: node has no children
      else {
        node = undefined
      }
    }
    return node
  }

  private get_successor(curr: TNode<T>): TNode<T> {
    if (!curr.left) return curr
    return this.get_successor(curr.left)

  }


  public bfs(): T[] {
    var out: T[] = []
    if (!this.root) return []
    var q = [this.root]
    while (q.length) {
      var curr = q.shift() as TNode<T>
      out.push(curr.value)
      if (curr.left) q.push(curr.left)
      if (curr.right) q.push(curr.right)
    }

    return out
  }

}

// UTILS
type TNode<T> = {
  value: T,
  left?: TNode<T>
  right?: TNode<T>
}

function newNode<T>(value: T): TNode<T> {
  return {
    value, left: undefined, right: undefined
  }
}
