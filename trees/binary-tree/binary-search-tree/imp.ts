export default class BST<T> {
  head: TNode<T> | undefined

  constructor() {
    this.head = undefined
  }

  insert(value: T): void {
    var nnode = newNode(value)
    if (!this.head) {
      this.head = nnode
      return
    }
    this.dfs_insert(this.head, nnode)

  }

  delete(value: T): T | undefined {
    if (!this.head) return
    const { parent, target } = this.get_parent(this.head, this.head, value)

    if (!target) {
      return
    }
    let out: T = target.value

    // Case 1: Target has no children
    if (!target.left && !target.right) {
      this.delete_leaf(parent, target)
    }
    // Case 2: Target has one child
    if ((!target.left && target.right) || (!target.right && target.left)) {
      this.delete_target_with_single_child(parent, target)
    }
    // Case 3: Target has two children
    if (target.left && target.right) {
      const successor = this.get_successor(target.right)
      const s = this.get_parent(this.head, this.head, successor.value)

      // NOTE: should never happen!
      if (!s.target) {
        console.error("[delete]: unexpected! successor not found!")
        return undefined
      }

      const tmp = target.value
      out = tmp
      target.value = successor.value
      successor.value = tmp
      if (!s.target.left && !s.target.right) { // successor has no children
        this.delete_leaf(s.parent, s.target)
      } else {
        this.delete_target_with_single_child(s.parent, s.target)
      }
      // return this.delete(tmp)
    }


    return out
  }

  private delete_leaf(parent: TNode<T>, target: TNode<T>) {
    if (parent.left === target) parent.left = undefined
    if (parent.right === target) parent.right = undefined
  }
  private delete_target_with_single_child(parent: TNode<T>, target: TNode<T>) {
    if (parent.left === target) {
      parent.left = target.left || target.right
    }
    if (parent.right === target) {
      parent.right = target.left || target.right
    }
  }


  private get_successor(curr: TNode<T>): TNode<T> {
    if (!curr.left) return curr
    return this.get_successor(curr.left)

  }

  private get_parent(curr: TNode<T>, parent: TNode<T>, target: T): { parent: TNode<T>, target: TNode<T> | undefined } {
    if (curr.value === target) {
      return { parent, target: curr }
    }

    if (target < curr.value && curr.left) {
      return this.get_parent(curr.left, curr, target)
    } else if (target > curr.value && curr.right) {
      return this.get_parent(curr.right, curr, target)
    } else {
      return { parent, target: undefined }

    }
  }

  private dfs_insert(curr: TNode<T>, node: TNode<T>) {
    if (curr.value === node.value) return
    if (node.value > curr.value) { // go right
      if (!curr.right) {
        curr.right = node
        return
      }
      this.dfs_insert(curr.right, node)
    } else {
      if (!curr.left) {
        curr.left = node
      }
      this.dfs_insert(curr.left, node)
    }
  }

  bfs(): T[] {
    var out: T[] = []
    if (!this.head) return []
    var q = [this.head]
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
