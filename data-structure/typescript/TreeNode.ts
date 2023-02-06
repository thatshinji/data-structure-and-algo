/**
 * TreeNode
 */
class TreeNode<T> {
  value: T | null
  left: TreeNode<T> | null
  right: TreeNode<T> | null

  constructor(value?: T, left?: TreeNode<T> | null, right?: TreeNode<T>) {
    this.value = !value ? null : value
    this.left = !left ? null : left
    this.right = !right ? null : right
  }
}