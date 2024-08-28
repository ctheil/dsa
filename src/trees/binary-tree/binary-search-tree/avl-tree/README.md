# AVL Tree

## Summary

AVL trees keep a *balancing factor* and rotate the tree on every insertion
to keep the *balancing factor* in check.

## Balance Factor

Must be between `-1, 0, or 1`

If a node has no children on either side, its balance factor is `0`

if a node has children, the balance factor is calculate as such:

```mathematica
# r - l produces negative for left-leaning trees
balance_factor = Right(node_height) - Left(node_height)
```

Negative numbers indicate that a tree (or subtree) is *left-leaning*

Positive numbers indicate that a tree (or subtree) is *right-leaning*

```mathematica
          0
        |xx| <- 2 - 2 = 0
        2  2
    -1        -1
   |xx|      |xx| <- 0 - 1 = -1
   1  0      1  0
  0          0
|xx|       |xx| <- 0 - 0 = 0
0  0       0  0
```

## Rotations

### <a name="rr-rotation"></a> RR Rotation

- Applies to trees which are *right-leaning* and *out of balance*.
- **R** is the lean, and we need to rotate out of it.
- Rotation is to the left

```mathematica
|42|
    \
     |69|
        \
       |420|
```

#### How?

- Drop down the top-most node.
  - This creates a subtree where:
    - the middle node the parent of the topmost (the smallest of the three)
    - And the last node is the greatest, therefore exists the furthest to the right.

```mathematica
|42|
|    \
|    |69|
|      \
|    |420|

    |69|
     /\
 |42|  |420|
```

### LL Rotation

- Essentially the same as an [RR Rotation](#rr-rotation),
just applies to an out of balance *left-leaning tree*

### LR and RL Rotations

- These rotations contain multiple steps,
the first of which aims to rotate the tree to a point where either an
[RR Rotation](#rr-rotation) or an [LL Rotation](#ll-rotation) will fix the tree

### What is the nodes have children?

- As long as you follow the basic [BST rule](/src/trees/binary-tree/binary-search-tree/README.md#bst-rules) (`x < z < y` or `left < center < right`)
