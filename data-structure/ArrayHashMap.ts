/**
 * @description HashMap by Array
 */

class Entry {
  public key: number
  public value: string
  constructor(key: number, value: string) {
    this.key = key
    this.value = value
  }
}

class ArrayHashMap {
  private readonly bucket: (Entry | null)[]
  private size: number
  constructor(size:number) {
    this.size = size
    this.bucket = new Array(size).fill(null)

  }
  private hashFunc (key: number): number {
    return key % this.size
  }
  /**
   * @description get value
   * @param key 
   * @returns 
   */
  public get(key: number): string | null {
    let index = this.hashFunc(key)
    let entry = this.bucket[index]
    if (entry === null) return null
    return entry.value
  }
  /**
   * @description set
   * @param key 
   * @param value 
   */
  public set(key: number, value: string) {
    const index = this.hashFunc(key)
    const entry = new Entry(key, value)
    this.bucket[index] = entry
  }

  /**
   * @description get all entries
   * @returns 
   */
  public entries(): (Entry|null)[] {
    let arr:(Entry|null)[] = []
    for (let i = 0; i < this.bucket.length; i++) {
      if (this.bucket[i]){
        arr.push(this.bucket[i])
        // arr.push({
        //   key: this.bucket[i]!.key,
        //   value: this.bucket[i]!.value
        // })
      }
    }
    return arr
  }

  /**
   * @description get all keys
   * @returns 
   */
  public keys(): (number|undefined)[] {
    if (this.bucket.length === 0) return []
    let arr: (number | undefined)[] = []
    for (let i = 0; i < this.bucket.length; i++) {
      if (this.bucket[i]){
        arr.push(this.bucket[i]?.key)
      }
    }
    return arr
  }

  /**
   * @description get all values
   * @returns 
   */
  public values(): (string|undefined)[] {
    if (this.bucket.length === 0) return []
    let arr: (string | undefined)[] = []
    for (let i = 0; i < this.bucket.length; i++) {
      if (this.bucket[i]){
        arr.push(this.bucket[i]?.value)
      }
    }
    return arr
  }

}