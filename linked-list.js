class LinkedList {
  constructor() {
    this.before = null;
    this.after = null;
    this.thing = null;
    this.incremental = 0;
  }

  push(number) {
    if(this.thing == null) {
      this.thing = number;
    }

    if(this.thing != null) {
      this.before = this.thing;
      this.thing = number;
    }
    this.incremental += 1;
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

    this.incremental -= 1;
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
      this.incremental -= 1;
      return firstItem;
    }

    if(this.after != null) {
      firstItem = this.thing;

      this.thing = this.after;
    } else if(this.before == null) {
      firstItem = this.thing;

      this.thing = null;
    } else {
      firstItem = this.before;

      this.before = this.thing;
    }
    this.incremental -= 1;
    return firstItem;
  }

  unshift(number) {
    if(this.thing == null) {
      this.thing = number;
      this.incremental += 1;
      return;
    }

    if(this.thing != null) {
      this.after = this.thing;
      this.thing = number;
    }
    this.incremental += 1;
  }

  count() {
    return this.incremental;
  }
}

export default LinkedList;
