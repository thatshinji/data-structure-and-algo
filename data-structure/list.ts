/**
 * @description MyList base array
 */

class MyList {
    private items: Array<any>
    private _capacity: number = 10
    private _size: number = 0
    private extendRatio: number = 0

    constructor() {
        this.items = new Array(this._capacity)
    }
    public size(): number {
        return this._size
    }

    public capacity(): number {
        return this._capacity
    }

    public get(index: number): any {
        if (index >=  this._size) {
            throw new Error('索引越界')
        }
        return this.items[index]
    }

    public set(index: number, item: any):void {
        if (index >= this._size) throw new Error('索引越界')
        this.items[index] = item
    }

    /**
     * @description 扩容
     */
    public extendCapacity(): void {
        this.items = this.items.concat(new Array(this.capacity() * (this.extendRatio - 1)))
        this._capacity = this.items.length
    }

    /**
     * @description list 尾部追加
     * @param item
     */
    public add(item: any): void {
        if (this._size === this._capacity) {
            this.extendCapacity()
        }
        this.items[this._size] = item
        this._size++
    }

    /**
     * @description 插入数据
     * @param index
     * @param item
     */

    public insert(index: number, item:any): void {
        if (index > this._size) {
            throw new Error("索引越界")
        }
        if (this._size === this._capacity) {
            this.extendCapacity()
        }
        for (let i = this._size - 1; i>= index; i--) {
            this.items[i+1] = this.items[i]
        }
        this.items[index] = item
        this._size++
    }

    public remove(index: number): number {
        if (index >= this._size) throw new Error("索引越界")
        let num = this.items[index]
        for (let i = index; i < this._size-1; i++) {
            this.items[i] = this.items[i+1]
        }
        this._size--
        return num
    }
}