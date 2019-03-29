class LinkedList {
  constructor() {
    this.before = null;
    this.after = null;
    this.thing = null;
    this.incremental = 0;
    this.listItems = new Object;
  }

  push(number) {
    if(this.thing != null && this.before != null) {
      this.after = this.before;
      this.before = this.thing;
      this.thing = number;
      this.incremental += 1;
      return;
    }

    if(this.thing == null) {
      this.thing = number;
      this.incremental += 1;
      return;
    }

    if(this.thing != null) {
      this.before = this.thing;
      this.thing = number;
      this.incremental += 1;
      return
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

    this.incremental -= 1;
    return lastItem;
  }

  shift() {
    let firstItem;

    console.log(this.before, this.after, this.thing)

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
      this.incremental -= 1;
      return firstItem;
    } else if(this.before == null) {
      firstItem = this.thing;

      this.thing = null;
      this.incremental -= 1;
      return firstItem;
    } else {
      firstItem = this.before;

      this.before = this.thing;
      this.incremental -= 1;
      return firstItem;
    }
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
      this.incremental += 1;
      return;
    }
  }

  count() {
    return this.incremental;
  }

  delete(number) {
    this.listItems["before"] = this.before;
    this.listItems["after"] = this.after;
    this.listItems["thing"] = this.thing;
    console.log(this.listItems)

    switch (Object.keys(this.listItems).find(key => this.listItems[key] === number)) {
      case "before":
        this.before = this.after;
        this.after = null;
        this.incremental -= 1;
        break;
      case "after":
        this.after = this.before;
        this.before = null;
        this.incremental -= 1;
        break;
      case "thing":
        this.thing = null;
        this.incremental -= 1;
    }
    return;
  }
}

export default LinkedList;
