// const bubble_sort = (arr, target) => {
//   console.log(target);
//   let lo = 0;
//   let hi = arr.length;
//   do {
//     const m = Math.floor((lo + (hi - lo)) / 2);
//     console.log("middle", m);
//     const v = arr[m];
//     if (v === target) return true;
//     else if (v > target) {
//       hi = m;
//     } else {
//       lo = m + 1;
//     }
//   } while (lo < hi);

//   return false;
// };

// // console.log(bubble_sort([1, 2, 3, 4, 5, 6], 2));
// // [];

// const breaks = [
//   false,
//   false,
//   false,
//   false,
//   false,
//   false,
//   false,
//   false,
//   false,
//   false,
//   false,
//   false,
//   false,
//   false,
//   false,
//   true,
//   true,
// ];

// const break_search = (arr) => {
//   const jumpAmount = Math.floor(Math.sqrt(arr.length));
//   let i = jumpAmount;
//   for (; i < arr.length; i += jumpAmount) {
//     if (arr[i]) {
//       break;
//     }
//   }
//   i -= jumpAmount;
//   for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
//     if (breaks[i]) {
//       return i;
//     }
//   }
//   return -1;
// };

// console.log(break_search(breaks));

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.lenght = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    this.size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    this.size--;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      this.size--;
    }

    let current = this.head;
    [1, 2, null];
    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
    this.size--;
  }
}
