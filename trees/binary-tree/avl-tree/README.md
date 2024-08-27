# AVL Tree

## Summary

AVL trees keep a *balancing factor* and rotate the tree on every insertion
to keep the *balancing factor* in check.

## Balance Factor

Must be between `-1, 0, or 1`

If a node has no children on either side, its balance factor is `0`

if a node has children, the balance factor is calculate as such:

```typescript
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
