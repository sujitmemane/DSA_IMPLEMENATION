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
  update(index, newName, newDesc) {}

  markDone(index) {}
  markUnDone(index) {}
  toggleStatus(index) {}

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
  getAllDone() {}
  getAllUnDone() {}
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
  reverseList() {}
  toArray() {}

  // ---------------- Advanced ----------------
  moveTask(fromIndex, toIndex) {}
  swapTasks(index1, index2) {}
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
todoManager.getAll();
todoManager.deleteLast();
todoManager.getAll();
