class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    //  [1,2,3,4,5]

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
    newNode.prev = current;
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
  }
}
