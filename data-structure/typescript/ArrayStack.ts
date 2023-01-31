/**
 * @description Stack by Array
 */

export class ArrayStack {
  private stack: any = []
  constructor() {
    this.stack = []
  }

  get size() {
    return this.stack.length
  }
  isEmpty(): boolean {
    // return this.size === 0
    return this.stack.length === 0
  }

  push (item:any): void {
    this.stack.push(item)
  }
  pop(): any {
    if(this.isEmpty()) {
      throw new Error("栈为空")
    }
    return this.stack.pop()
  }
  top(): any {
    if(this.isEmpty()) {
      throw new Error("栈为空")
    }
    return this.stack[this.stack.length - 1]
  }
}