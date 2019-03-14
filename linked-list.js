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
    let lastItem = this.thing;

    this.thing = this.previous;

    return lastItem;
  }
}

export default LinkedList;
