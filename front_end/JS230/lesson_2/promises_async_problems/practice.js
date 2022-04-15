let obj = {
  names: ['Sue', 'Kim', 'Bob'],
  // custom iterator goes here
};

console.log([...obj]); // ['Bob', 'Kim', 'Sue']

[Symbol.asyncIterator]() {
  return {
    list: this.names,
    index: this.names.length,
    next() {
      if (this.index === 0) return { done: true };
      this.index -= 1;
      return {
        done: false,
        value: this.list[this.index],
      }
    }
  };
}