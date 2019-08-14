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

    node.previous = this.tail;

    if (this.tail) {
      this.tail.next = node;
    }

    this.tail = node;

    if (this.head == null) {
      this.head = node;
    }

    this.incremental += 1;
  }

  pop() {
    const element = this.tail;

    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    }
    if (this.tail !== this.head) {
      this.tail = this.tail.previous;
      this.tail.next = null;
    }

    this.incremental -= 1;
    return element.value;
  }

  shift() {
    const element = this.head;

    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    }

    if (this.tail !== this.head) {
      this.head = this.head.next;
      this.head.previous = null;
    }

    this.incremental -= 1;
    return element.value;
  }

  unshift(number) {
    const node = new Node(number);

    node.next = this.head;

    if (this.head) {
      this.head.previous = node;
    }

    this.head = node;

    if (this.tail == null) {
      this.tail = node;
    }

    this.incremental += 1;
  }

  count() {
    return this.incremental;
  }

  delete(number) {
    if (this.incremental <= 1 && this.head.value !== number) {
      return;
    }

    if (this.head.value === number) {
      this.head = this.tail;
      this.incremental -= 1;
      return;
    }

    if (this.tail.value === number) {
      this.tail = this.head;
      this.incremental -= 1;
      return;
    }

    if (this.tail.previous && this.tail.previous.value === number) {
      this.tail.previous = this.head;
      this.head.next = this.tail;
      this.incremental -= 1;
    }
  }

  insert(number) {
    const node = new Node(number);

    if (number < this.tail.value && number > this.head.value) {
      node.value = number;
      node.next = this.head;
      node.previous = this.tail;
      this.head.previous = node;
      this.tail.next = node;
    }

    this.incremental += 1;
  }

  list() {
    return [this.head.value, this.head.previous.value, this.head.next.value];
  }
}

export default LinkedList;
