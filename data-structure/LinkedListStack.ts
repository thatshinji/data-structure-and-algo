/**
 * @description Stack by linklist
 */
import { LinkedNode } from "./LinkList";
export class LinkedListStack {
  private stackPeek: LinkedNode | null
  private stkSize: number = 0

  constructor() {
    this.stackPeek = null
  }
  get size(): number {
    return this.stkSize
  }

  isEmpty (): boolean {
    return this.stkSize === 0
  }

  push (item: any) {
    const node = new LinkedNode(item)
    node.next = this.stackPeek
    this.stackPeek = node
    this.stkSize++
  }

  pop ():any {
    const item = this.peek()
    if (!this.stackPeek) {
      throw new Error("栈为空")
    }
    this.stackPeek = this.stackPeek.next
    this.stkSize--
    return item
  }

  /**
   * @description 访问栈顶元素
   */
  peek (): any {
    if (!this.stackPeek) {
      throw new Error("栈为空")
    }
    return this.stackPeek.value
  }

  toArray(): any {
    let node = this.stackPeek
    const res = new Array<any>(this.size)
    for(let i = res.length -1 ; i >= 0; i--) {
      res[i] = node?.value
      node = node!.next
    }
    return res
  }
}