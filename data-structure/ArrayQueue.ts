/**
 * @description Queue by Array
 */

class ArrayQueue{
  private queue: any[]
  private front: number = 0
  private rear: number = 0
  private CAPACITY: number = 1e5

  constructor(capacity?:number) {
    this.queue = new Array<any>(capacity ?? this.CAPACITY)
  }

  get capacity(): number {
    return this.queue.length
  }
  get size (): number {
    return (this.capacity + this.rear - this.front) % this.capacity
  }
  isEmpty(): boolean{
    return (this.rear - this.front) === 0
  }
  offer(item: any):void {
    if (this.size === this.capacity) {
      throw new Error("队列已满")
    }
    this.queue[this.rear] = item
    this.rear = (this.rear + 1) % this.capacity
  }
  poll (): any {
    const item  = this.peek()
    this.front = (this.front + 1) % this.capacity
    return item
  }
  peek ():any {
    if (this.isEmpty()) {
      throw new Error("队列为空")
    }
    return this.queue[this.front]
  }
}