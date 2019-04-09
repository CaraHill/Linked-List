class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.incremental = 0;
  }

  push(number) {
    const node = new Node(number);

    if(this.incremental === 0) {
      this.head = node;
      this.tail = node;
      this.incremental++;
      return;
    }

    if(this.incremental >= 2) {
      node.previous = this.head;
    } else {
      node.previous = this.tail;
    }

    this.head = node;
    let oldNode = node.previous;
    oldNode.next = node;
    this.incremental++;
  }

  pop() {
    let nodeToRemove = this.head;
    this.head = this.head.previous;
    this.incremental--;

    if(this.head != null) {
      this.head.next = null;
    }

    if(this.incremental === 0) {
      this.tail = null;
    }

    return nodeToRemove.value;
  }

  shift() {
    let nodeToRemove = this.tail;
    this.tail = this.tail.next;
    this.incremental--;

    if(this.tail != null) {
      this.tail.previous = null;
    }

    if(this.incremental === 0) {
      this.head = null;
    }

    return nodeToRemove.value;
  }

  unshift(number) {
    const node = new Node(number);

    if(this.incremental) {
      node.next = this.head;
      this.tail = node;
      let oldNode = node.next;
      oldNode.previous = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.incremental++;
  }

  count() {
    return this.incremental;
  }

  delete(number) {
    if(this.incremental <= 1 && this.head.value != number) {
      return;
    }

    if(this.head.value === number) {
      this.head = this.tail;
      this.incremental--;
      return;
    }

    if(this.head.previous.value === number) {
      this.head.previous = this.tail;
      this.tail.next = this.head;
      this.incremental--;
    }
  }

  insert(number) {
    const node = new Node(number);

    if(number < this.head.value && number > this.tail.value) {
      node.value = number;
      node.next = this.head;
      node.previous = this.tail;
      this.head.previous = node;
      this.tail.next = node;
    }

    this.incremental++;
  }

  list() {
    return [this.tail.value, this.tail.next.value, this.head.value];
  }
}

export default LinkedList;
