Phase 1: Core Foundation

👉 Goal: Understand what a linked list is, and implement CRUD + traversal from scratch.
Create subfolders inside linked-list/ for each step.

Setup

File: Node.js (class Node { constructor(value) { this.value = value; this.next = null; } })

File: LinkedList.js (basic linked list class).

Basic Operations (folder: 01-basic)

Create a new linked list.

Insert (at head, at tail, at specific index).

Delete (head, tail, specific index, by value).

Search (by value, return index).

Traverse/Loop (while loop + recursion).

Length/size of list.

Convert linked list → array, and array → linked list.

🔹 Phase 2: Intermediate Linked List Problems

👉 Goal: Get comfort with algorithms on linked lists.
Folder: 02-problems

Reverse a linked list (iterative + recursive).

Find middle node (tortoise–hare method).

Detect loop in linked list (Floyd’s cycle detection).

Remove duplicates (unsorted + sorted linked list).

Nth node from end.

Merge two sorted linked lists.

Check palindrome linked list.

Intersection of two linked lists.

🔹 Phase 3: Doubly & Circular Linked Lists

👉 Goal: Expand beyond singly linked list.
Folder: 03-variants

Doubly Linked List (CRUD operations).

Insert at head, tail, index.

Delete head, tail, index.

Traverse forward + backward.

Circular Linked List

Single circular (last node points to head).

Doubly circular.

🔹 Phase 4: Practical Implementations

👉 Goal: Apply linked list concepts in real-world JavaScript scenarios.
Folder: 04-practical

Here are practical mini-projects you can do:

Undo/Redo functionality

Each action is a node in a doubly linked list.

Move forward/backward to undo/redo.

Music Player Queue 🎵

Playlist implemented with circular linked list.

“Next song” → move pointer forward.

“Previous song” → move pointer backward.

Browser History Navigation 🌐

Doubly linked list for forward/back history.

Text Editor (like Notepad) Cursor

Linked list to represent characters.

Insert/delete characters at cursor.

LRU Cache (Least Recently Used)

Doubly linked list + Map → Cache system.

File Explorer Simulation 📂

Each folder = node, linked list of subfolders/files.

Traverse like navigation.
