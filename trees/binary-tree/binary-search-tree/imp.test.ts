// import BST from "./imp"
import BST from "./example"

//               TREE
//                10
//         5              15
//      3     6        14   18
//    1   4     8    12       19

describe("test Binary Search Tree", () => {
  const t = new BST<number>()
  let vals = [10, 5, 3, 1, 7, 6, 9, 15, 14, 18, 19]
  it("should create tree, insert, and print correctly", () => {
    for (let val of vals) {
      t.insert(val)
    }

    expect(t.bfs()).toEqual([10, 5, 15, 3, 7, 14, 18, 1, 6, 9, 19])
  })
  it("Case 1: should delete node with no-children", () => {
    var target = 14

    t.delete(target)
    // expect(t.delete(target)).toBe(target)

    const updatedVals: number[] = []
    for (let val of vals) {
      if (val === target) {
        continue
      }
      updatedVals.push(val)
    }
    vals = updatedVals

    expect(t.bfs()).toEqual([10, 5, 15, 3, 7, 18, 1, 6, 9, 19])
  })
  it("Case 2: should delete node with one-child", () => {
    var target = 18

    t.delete(target)
    // expect(t.delete(target)).toBe(target)

    const updatedVals: number[] = []
    for (let val of vals) {
      if (val === target) {
        continue
      }
      updatedVals.push(val)
    }
    vals = updatedVals

    expect(t.bfs()).toEqual([10, 5, 15, 3, 7, 19, 1, 6, 9])
  })
  it("Case 3: should delete node with two-children", () => {
    var target = 5

    t.delete(target)
    // expect(t.delete(target)).toBe(target)
    // t.delete(target)

    const updatedVals: number[] = []
    for (let val of vals) {
      if (val === target) {
        continue
      }
      updatedVals.push(val)
    }
    vals = updatedVals

    expect(t.bfs()).toEqual([10, 6, 15, 3, 7, 19, 1, 9])
  })
})
