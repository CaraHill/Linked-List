class LinkedList {
  constructor() {
    this.next = null;
    this.previous = null;
    this.thing = null;
  }

  push(number) {
    if(this.thing == null) {
      this.thing = number;
    }

    if(this.thing != null) {
      this.previous = this.thing;
      this.thing = number;
    }
  }

  pop() {
    const lastItem = this.thing;

    this.thing = this.previous;

    return lastItem;
  }

  shift() {
    const firstItem = this.previous;

    this.previous = this.thing;

    return firstItem;
  }
}

export default LinkedList;
