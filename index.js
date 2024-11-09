class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList");  // Error for empty list
    return this.items[this.length - 1];  // Return the last item, which is the max in a sorted list
  }

  min() {
    if (this.length === 0) throw new Error("EmptySortedList");  // Error for empty list
    return this.items[0];  // Return the first item, which is the min in a sorted list
  }

  sum() {
    return this.items.reduce((acc, curr) => acc + curr, 0);  // Sum all items
  }

  avg() {
    if (this.length === 0) throw new Error("EmptySortedList");  // Error for empty list
    return this.sum() / this.length;  // Calculate the average
  }
}

module.exports = SortedList;
