import fs from "fs";
// ---------------- Node Definition ----------------
class FileNode {
  constructor(name, type = "FILE", parent) {
    this.name = name; // file or folder
    this.type = type; // "file" or "folder" // "FILE" | "FOLDER"

    this.next = null; // next node in current directory
    this.child = null; // subdirectory (only for folders)
    this.parent = parent;
    this.file = null;
  }
}

// root/
// ├─ Documents/
// │  ├─ todo.txt
// │  ├─ meeting.txt
// │  └─ Projects/
// │     ├─ project1.docx
// │     └─ project2.docx
// ├─ Images/
// │  ├─ img1.png
// │  └─ img2.jpg
// └─ notes.txt

// ---------------- File Explorer Manager ----------------
class FileExplorer {
  constructor() {
    this.head = null; // head of current directory
    this.length = 0;
    this.current = this.head; // pointer to current directory
  }

  initalizeRoot() {
    const root = new FileNode("root", "FOLDER");
    this.head = root;
  }

  // ---------------- Insertion ----------------

  findFolder(node, folderName) {
    let current = node;
    while (current) {
      if (current.type === "FOLDER" && current.name === folderName) {
        return current;
      }
      if (current.type === "FOLDER" && current.child !== null) {
        const found = this.findFolder(current.child, folderName);
        if (found) return found;
      }
      current = current.next;
    }
    return null;
  }

  showFileExplorer(node, indent = 0) {
    let current = node;
    while (current) {
      const prefix = "  ".repeat(indent);
      const name = `${prefix}${current.name} ${
        current.type === "FOLDER" ? "📂" : "📄"
      }`;
      console.log(name);

      if (current.child) {
        this.showFileExplorer(current.child, indent + 1);
      }

      current = current.next;
    }
  }

  print() {
    this.showFileExplorer(this.head);
  }

  create(name, type, parentFolder) {
    const folderNode = this.findFolder(this.head, parentFolder);
    if (!folderNode) {
      console.log("No folder found of this name");
      return;
    }

    if (type === "FILE") {
    }
    const newFile = new FileNode(name, type, folderNode);
    if (!folderNode.child) {
      folderNode.child = newFile;
    } else {
      let current = folderNode.child;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newFile;
    }
  }

  // ---------------- Deletion ----------------
  deleteByName(node, name) {
    let current = node;

    while (current) {
      if (current.name === name) {
        const parent = current.parent;
        if (!parent) {
          this.head = current.next;
        }
        if (parent.child === current) {
          parent.child = current.next;
        } else {
          let prev = parent.child;
          while (prev && prev.next !== current) {
            prev = prev.next;
          }
          if (prev) {
            prev.next = current.next;
          }
        }

        return true;
      }

      if (current.child) {
        const deleted = this.deleteByName(current.child, name);
        if (deleted) return true;
      }

      current = current.next;
    }
    return false;
  }

  delete(name) {
    this.deleteByName(this.head, name);
  }
  deleteAtIndex(index) {}
  clearAll() {}

  // ---------------- Navigation ----------------
  openFolder(name) {}
  goBack() {}
  changeDirectory(path) {}
  listAll() {}

  // ---------------- Update / Rename ----------------
  rename(oldName, newName) {}

  // ---------------- Search / Retrieval ----------------
  searchByName(name) {}
  filterByType(type) {}
  getAll() {}
  getAtIndex(index) {}

  // ---------------- Utilities / Helpers ----------------
  isEmpty() {}
  _countNodes(head) {}
  _findNode(name) {}

  // ---------------- Advanced Features ----------------
  moveItem(fromName, toFolderName) {}
  swapItems(name1, name2) {}
  sortByName() {}
  sortByType() {}
  cloneDirectory() {}
  mergeAnotherDirectory(otherExplorer) {}
}

// ---------------- Example Usage ----------------
const explorer = new FileExplorer();
explorer.initalizeRoot();
explorer.create("text.jsx", "FILE", "root");
explorer.create("students", "FOLDER", "root");
explorer.create("teachers", "FOLDER", "root");
explorer.create("sci.txt", "FILE", "teachers");
explorer.create("math.txt", "FILE", "teachers");
explorer.create("sujit.txt", "FILE", "students");
explorer.create("sam.txt", "FILE", "students");
explorer.create("ram.txt", "FILE", "students");
console.log("----BEFORE----");
explorer.print();
explorer.delete("students");
console.log("----AFTER----");
explorer.print();
