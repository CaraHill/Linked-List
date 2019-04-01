class LinkedList {
  constructor() {
    this.previous = null;
    this.next = null;
    this.value = null;
    this.incremental = 0;
    this.listItems = new Object;
  }

  push(number) {
    if(this.value != null && this.previous != null) {
      this.next = this.previous;
      this.previous = this.value;
      this.value = number;
      this.incremental += 1;
      return;
    }

    if(this.value == null) {
      this.value = number;
      this.incremental += 1;
      return;
    }

    if(this.value != null) {
      this.previous = this.value;
      this.value = number;
      this.incremental += 1;
      return
    }
  }

  pop() {
    let lastItem;

    if(this.previous != null && this.next != null) {
      lastItem = this.next;

      this.next = this.value;

      this.incremental -= 1;
      return lastItem;
    }

    if(this.previous != null) {
      lastItem = this.value;

      this.value = this.previous;
    } else {
      lastItem = this.next;

      this.next = this.value;
    }

    this.incremental -= 1;
    return lastItem;
  }

  shift() {
    let firstItem;


    if(this.previous != null && this.next != null) {
      console.log(this.previous, this.next, this.value)
      firstItem = this.previous;

      if(this.incremental >= 2) {
        this.previous = this.value;
      } else {
        this.previous = null;
      }

      let newThing = this.next;
      this.next = this.value;
      this.value = newThing;

      this.incremental -= 1;
      return firstItem;
    }

    if(this.next != null) {
      firstItem = this.value;

      this.value = this.next;
      this.incremental -= 1;
      return firstItem;
    } else if(this.previous == null) {
      firstItem = this.value;

      this.value = null;
      this.incremental -= 1;
      return firstItem;
    } else {
      firstItem = this.previous;

      this.previous = this.value;
      this.incremental -= 1;
      return firstItem;
    }
  }

  unshift(number) {
    if(this.value == null) {
      this.value = number;
      this.incremental += 1;
      return;
    }

    if(this.value != null) {
      this.next = this.value;
      this.value = number;
      this.incremental += 1;
      return;
    }
  }

  count() {
    return this.incremental;
  }

  delete(number) {
    this.listItems["previous"] = this.previous;
    this.listItems["next"] = this.next;
    this.listItems["value"] = this.value;
    console.log(this.listItems)

    switch (Object.keys(this.listItems).find(key => this.listItems[key] === number)) {
      case "previous":
        this.previous = this.next;
        this.next = null;
        this.incremental -= 1;
        break;
      case "next":
        this.next = this.previous;
        this.previous = null;
        this.incremental -= 1;
        break;
      case "value":
        this.value = null;
        this.incremental -= 1;
    }
    return;
  }
}

export default LinkedList;
