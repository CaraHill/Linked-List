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
    let lastItem;

    if(this.before != null) {
      lastItem = this.thing;

      this.thing = this.before;
    } else {
      lastItem = this.after;

      this.after = this.thing;
    }
    return lastItem;
  }

  shift() {
    let firstItem;

    if(this.before != null && this.after != null) {
      firstItem = this.before;
      this.before = null;
      let newThing = this.after;
      this.after = this.thing;
      this.thing = newThing;
      return firstItem;
    }
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
