class Todo {
  constructor(name, desc) {
    this.name = name;
    this.desc = desc;
    this.status = false;
    this.next = null;
  }
}

class TodoManager {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // ---------------- Insertion ----------------
  insertAtStart(name, desc) {
    const newTodo = new Todo(name, desc);
    if (this.head === null) {
      this.head = newTodo;
      this.length += 1;
      return;
    }
    newTodo.next = this.head;
    this.head = newTodo;
    this.length += 1;
  }
  insertAtEnd(name, desc) {
    const newTodo = new Todo(name, desc);
    if (this.head === null) {
      this.head = newTodo;
    }
    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }
    current.next = newTodo;
    this.length++;
  }
  insertAtIndex(index, name, desc) {
    if (index < 0 || index > this.length) {
      console.log("Invalid index");
      return;
    }

    if (index === 0) {
      this.insertAtStart(name, desc);
      return;
    }

    const newTodo = new Todo(name, desc);
    // 10 20 30 40
    let i = 0;
    let current = this.head;
    while (i < index - 1) {
      current = current.next;
      i++;
    }

    newTodo.next = current.next;
    current.next = newTodo;
    this.length++;
  }

  // ---------------- Deletion ----------------
  deleteFirst() {
    if (this.head === null) {
      return;
    }
    this.head = this.head.next;
  }
  deleteLast() {
    if (this.head === null) {
      return;
    }
    // 10 20 30 40
    let current = this.head;
    while (current.next.next != null) {
      current = current.next;
    }
    current.next = null;
  }
  deleteAtIndex(index) {
    if (this.isEmpty()) {
      return;
    }
    if (index < 0 || index > this.length - 1) {
      console.log("Invalid index");
      return;
    }

    let current = this.head;
    let previous = null;
    let i = 0;
    while (i < index) {
      previous = current;
      current = current.next;
      i++;
    }

    previous.next = current.next;
  }
  deleteByName(name) {}

  // ---------------- Update ----------------
  update(index, newName, newDesc) {
    if (this.isEmpty()) {
      return;
    }

    if (index < 0 || index > this.length - 1) {
      console.log("Invalid syntax");
    }

    // 10 20 30 40 50
    let current = this.head;
    let i = 0;
    while (current !== null) {
      if (i === index) {
        current.name = newName;
        current.desc = newDesc;
      }
      current = current.next;
      i++;
    }
  }

  markDone(index) {
    if (this.isEmpty()) {
      return;
    }

    if (index < 0 || index > this.length - 1) {
      console.log("Invalid syntax");
    }

    // 10 20 30 40 50
    let current = this.head;
    let i = 0;
    while (current !== null) {
      if (i === index) {
        current.status = true;
      }
      current = current.next;
      i++;
    }
  }
  markUnDone(index) {
    if (this.isEmpty()) {
      return;
    }

    if (index < 0 || index > this.length - 1) {
      console.log("Invalid syntax");
    }

    // 10 20 30 40 50
    let current = this.head;
    let i = 0;
    while (current !== null) {
      if (i === index) {
        current.status = false;
      }
      current = current.next;
      i++;
    }
  }
  toggleStatus(index) {
    if (this.isEmpty()) {
      return;
    }

    if (index < 0 || index > this.length - 1) {
      console.log("Invalid syntax");
    }

    // 10 20 30 40 50
    let current = this.head;
    let i = 0;
    while (current !== null) {
      if (i === index) {
        current.status = !current.status;
      }
      current = current.next;
      i++;
    }
  }

  // ---------------- Retrieval ----------------

  getAll() {
    if (this.length == 0) {
      console.log("No Task Found");
      return;
    }
    const todos = [];

    let current = this.head;

    while (current !== null) {
      todos.push({
        name: current?.name,
        desc: current?.desc,
        status: current?.status,
      });
      current = current.next;
    }
    console.log(todos);
    return todos;
  }

  getFromIndex(index) {}
  getAllDone() {
    if (this.length == 0) {
      console.log("No Task Found");
      return;
    }
    const todos = [];

    let current = this.head;

    while (current !== null) {
      if (current.status) {
        todos.push({
          name: current?.name,
          desc: current?.desc,
          status: current?.status,
        });
      }
      current = current.next;
    }
    console.log("Done Todos", todos);
    return todos;
  }
  getAllUnDone() {
    if (this.length == 0) {
      console.log("No Task Found");
      return;
    }
    const todos = [];

    let current = this.head;

    while (current !== null) {
      if (!current.status) {
        todos.push({
          name: current?.name,
          desc: current?.desc,
          status: current?.status,
        });
      }
      current = current.next;
    }
    console.log("NotDone Todos", todos);
    return todos;
  }
  searchByName(name) {}
  searchByDesc(keyword) {}

  // ---------------- Utilities ----------------
  count() {}
  isEmpty() {
    if (this.head === null) {
      return true;
    }
    return false;
  }
  clearAll() {}
  reverseList() {
    // 10 20 30 40 50
    let current = this.head;
    let previous = null;
    let next = null;
    while (current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }
  toArray() {}

  // ---------------- Advanced ----------------
  moveTask(fromIndex, toIndex) {
    // 1 ,2

    // 10 20 30 40 50
    if (
      fromIndex < 0 ||
      fromIndex >= this.length ||
      toIndex < 0 ||
      toIndex >= this.length
    ) {
      console.log("Invalid index");
      return;
    }

    if (fromIndex === toIndex) return;

    // 10 20 30 40 50

    let prevFrom = null;

    let current = this.head;
    for (let i = 0; i < fromIndex; i++) {
      prevFrom = current;
      current = current.next;
    }
    console.log(current, "current");

    if (prevFrom) {
      prevFrom.next = current.next;
    } else {
      this.head = current.next;
    }

    let prevTo = null;
    let currTo = this.head;
    for (let j = 0; j < toIndex; j++) {
      prevTo = currTo;
      currTo = currTo.next;
    }
    //
    if (prevTo) {
      current.next = currTo;
      prevTo.next = current;
    } else {
      current.next = this.head;
      this.head = current;
    }
  }
  swapTasks(index1, index2) {
    if (
      index1 < 0 ||
      index1 >= this.length ||
      index2 < 0 ||
      index2 >= this.length
    ) {
      console.log("Invalid index");
      return;
    }

    if (index1 === index2) return;

    if (index1 > index2) {
      [index1, index2] = [index2, index1];
    }

    let prev1 = null;
    let curr1 = this.head;
    for (let i = 0; i < index1; i++) {
      prev1 = curr1;
      curr1 = curr1.next;
    }

    let prev2 = null;
    let curr2 = this.head;
    for (let i = 0; i < index2; i++) {
      prev2 = curr2;
      curr2 = curr2.next;
    }

    if (prev1) {
      prev1.next = curr2;
    } else {
      this.head = curr2;
    }

    if (prev2) {
      prev2.next = curr1;
    } else {
      this.head = curr1;
    }

    const temp = curr1.next;
    curr1.next = curr2.next;
    curr2.next = temp;
  }

  sortByName() {}
  sortByStatus() {}
  cloneList() {}
  mergeAnotherList(otherList) {}
}

const todoManager = new TodoManager();
todoManager.insertAtStart("Gym", "Go to gym at 5");
todoManager.insertAtEnd("Sleep", "Sleeping at 10");
todoManager.insertAtEnd("Dance", "Dance at 7");
todoManager.insertAtIndex(1, "TV", "TV at 4");
// todoManager.getAll();
// todoManager.deleteLast();
// todoManager.update(2, "TV Man", "TV new desc");
// todoManager.getAll();

// todoManager.reverseList();
todoManager.getAll();
todoManager.swapTasks(2, 0);
todoManager.getAll();
