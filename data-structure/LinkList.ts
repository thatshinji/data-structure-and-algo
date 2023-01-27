/**
 * @description LinkedList
 */

export class LinkedNode {
  value: any;
  next: LinkedNode | null;

  constructor(val?: any, next?: LinkedNode | null) {
    this.value = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const l0 = new LinkedNode(0);
const l1 = new LinkedNode(1);
const l2 = new LinkedNode(2);

l0.next = l1;
l1.next = l2;
