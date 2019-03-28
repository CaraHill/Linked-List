class LinkedList {
  constructor() {
    this.before = null;
    this.after = null;
    this.thing = null;
  }

  push(number) {
    if(this.thing == null) {
      this.thing = number;
    }

    if(this.thing != null) {
      this.before = this.thing;
      this.thing = number;
    }
  }

  pop() {
    const lastItem = this.thing;

    this.thing = this.before;

    return lastItem;
  }

  shift() {
    let firstItem;
    if(this.after != null) {
      firstItem = this.thing;

      this.thing = this.after;
    } else {
      firstItem = this.before;

      this.before = this.thing;
    }
    return firstItem;
  }

  unshift(number) {
    if(this.thing == null) {
      this.thing = number;
    }

    if(this.thing != null) {
      this.after = this.thing;
      this.thing = number;
    }
  }
}

export default LinkedList;
