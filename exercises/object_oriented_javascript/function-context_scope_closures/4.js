function myBind(func, obj) {
  return function(...args) {
      return func.apply(obj, args);
  };
}

let numbers = {
    a: 1,
    b: 2,
    add() {
        return this.a + this.b;
    },
};

let words = {
    a: 'hi ',
    b: 'there',
};

console.log(myBind(numbers.add, words));