class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  middle() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  reverse() {
    let previous = null;
    let current = this.head;
    // 10, 20 , 30 , 40 , 50
    while (current !== null) {
      let nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    }

    this.head = previous;
  }

  print() {
    let current = this.head;
    const result = [];
    while (current !== null) {
      result.push(current?.data);
      current = current.next;
    }

    console.log(result);
  }

  hasCycle() {
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next;
      if (slow == fast) {
      }
    }
  }
}

const linkedList = new LinkedList();
linkedList.insert(5);
linkedList.insert(10);
linkedList.insert(15);
linkedList.insert(20);
linkedList.insert(25);
linkedList.print();
linkedList.reverse();
linkedList.print();
