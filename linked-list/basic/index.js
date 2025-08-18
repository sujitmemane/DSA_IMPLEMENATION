class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.lenght = 0;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.lenght++;
  }

  appendAtIndex(data, index) {
    if (index < 0 && index > this.lenght) {
      console.log("Invalid index");
      return;
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }
    const newNode = new Node(data);
    let indexCount = 0;
    let current = this.head;
    let previous = null;
    // 0  1  2.  3
    // 10 20 30 40
    while (i < index) {
      previous = current;
      current = current.next;
      indexCount++;
    }

    previous.next = newNode;
    newNode.next = current;
    this.lenght++;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.lenght++;
  }

  deleteHead() {
    this.head = this.head.next;
    this.lenght--;
  }
  deleteTail() {
    if (this.head == null) {
      console.log("List is empty, nothing to delete.");
      return;
    }

    if (this.head.next === null) {
      console.log(`Only one node (${this.head.value}) found. Deleting head.`);
      this.head = null;
      this.length--;
      return;
    }

    console.log("Starting deleteTail operation...");
    let current = this.head;

    // Example list: 10 -> 20 -> 30  -> 50
    while (current.next.next !== null) {
      console.log(
        `Currently at node: ${current.value}, moving forward to: ${current.next.value}`
      );
      current = current.next; // move forward
    }

    // Now current is at the second last node
    console.log(
      `Reached second last node: ${current.value}, deleting last node: ${current.next.value}`
    );
    current.next = null; // remove the last node
    this.length--;
    console.log("Tail deleted. New list tail:", current.value);
  }

  delete(data) {
    if (!this.head) {
      return; // List is empty
    }
    if (this.head.value === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  search(data) {
    let current = this.head;
    while (current !== null) {
      if (current.value === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  print() {
    let current = this.head;
    const elements = [];
    while (current !== null) {
      elements.push(current.value);
      current = current.next;
    }
    console.log(elements.join("->"));
  }
}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.append(50);
linkedList.prepend(0);
linkedList.delete(40);
linkedList.deleteTail();

linkedList.print();
