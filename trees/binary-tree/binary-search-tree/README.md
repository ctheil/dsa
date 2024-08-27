# Binary Search Tree

## BST Rules

  1. At any one node you can have:
      - a link to a parent
      - A link to (at most) 2 children
  2. On the left side of the tree everything is less-than the middle
  3. On the right side of the tree, everything is greater-than the middle

```txt
    <-- | -->
x <     z     < y
--->   / \   <---
      O   O
```

`Search is Log(n) (log of n)`
Takes the height amount of the tree for searching

## Traversals

*Example:*

```txt
        |20|
   |10|      |25|
|03| |15|  |23| |27|
```

### Pre-order

```typescript
visit(node)
left(node) // traverse left
right(node) // traverse right
```

Produces: `[20, 10, 25, 3, 15, 23, 27]` // incorrect!

### In-order

```typescript
left(node) // traverse left
visit(node)
right(node) // traverse right
```

In a binary-search tree, this will always visit nodes sorted by value.

Produces: `[3, 10, 15, 20, 23, 25, 27]`

### Post-order

```typescript
left(node) // traverse left
right(node) // traverse right
visit(node)
```

Produces: `[3, 15, 10, 23, 27, 10, 25, 20]`

## Deletion

### 3 Cases

1. Node with no child
    - Simple delete the link to the child

2. One child
    - When deleting a node with a single child,
    just connect the parent of the target to the child of the target.
      - This removes the node and replaces it's position in the tree with the child,
      therefore preserving the rules of the bst.
3. Two children: Goal is to make a swap
to reduce the target to conform to one of the two above rules.
    - Two choices: in-order predecessor, or the in-order successor
      - *e.g.* `..., 10, 20, 30, ...` 10: predecessor to 20, 30: successor to 20
      - **In-Order Predecessor**
        - From parent, traverse to the **left child**,
        then find the **largest** item on that branch
      - **In-Order Successor**
        - From parent, traverse to the **right child**,
        then find the **smallest** item on that branch
      - Allows you to find the closest item
      in the tree to the target (for deletion) to replace
      - If `20` is the deletion-target,
      replace it with the predecessor (`10`) or the successor (`30`)
    - Swap deletion-target with the predecessor or the successor
      - The swap will make the target have only either no child,
      or one child, allowing for easy deletion as it conforms to the above two rules.

## Insertion

- Insertion is simple, however, introduces balancing issues
  - Worst-case for a BST is inserting sorted data!
    - This will produce the largest possible height into the tree

## Complexity

A tree is *best-case* `log(n)`, and worse case `O(h)` or `O(height)`.

In a well-balanced BST, search is `log(n)`.

So, inserting a sorted dataset will produce a `height` of `n`,
creating a worst-case-scenario where the tree's search is `O(n)`
