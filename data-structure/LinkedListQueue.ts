/**
 * @description Queue by LinkedList
 */
import {LinkedNode} from "./LinkList";

class LinkedListQueue {
  private front: LinkedNode | null
  private rear: LinkedNode | null
  private queSize: number = 0

  constructor() {
    this.front = null
    this.rear = null
  }
  get size() {
    return this.queSize
  }
  isEmpty(): boolean {
    // return this.size === 0
    return this.queSize === 0
  }
  offer(item:any):void {
    const node = new LinkedNode(item)
    if(!this.front) {
      this.front = node
      this.rear = node
    } else {
      this.rear!.next = node
      this.rear = node
    }
    this.queSize++
  }
  pool(): any {
    const item = this.peek()
    if(!this.front) {
      throw new Error("队列为空")
    }
    this.front = this.front.next
    this.queSize--
    return item
  }
  peek():any {
    if(!this.front){
      throw new Error("队列为空")
    }
    return this.front.value
  }
}