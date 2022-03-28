// Object.create returns a new object with the passed in object as the prototype object of the new object

Object.getPrototypeOf([]) === Array.prototype;

function NewArray() {}
NewArray.prototype = Object.create(Object.getPrototypeOf([]));

// NewArray inherits from Array.prototype

NewArray.prototype.first = function() {
  return this[0];
};

// NewArray can now delegate all methods to Array.prototype

let newArr = new NewArray();
let oldArr = new Array();

/// Object.defineProperties

let obj = {
  name: 'Object';
};

Object.defineProperties(obj, {
  age: {
    value: 30,
    writable: false,
  },
});

console.log(obj.age); // 30
obj.age = 32;         // error in strict mode
console.log(obj.age); // 30

// create a function that constructs a new object with a log method that is read only
// use console.log to output name property

function newPerson(name) {
  return Object.defineProperties({ name: name }, {
    log: {
      value() {
        console.log(this.name);
      },

      writable: false
    },
  });
}

let me = newPerson('Felicia Bacon');
me.log(); // Felicia Bacon
me.log = function() { console.log('Felicia Khan'); };
me.log(); // Felicia Bacon

/// Object.freeze

let frozen = {
  integer: 4,
  string: 'String',
  array: [1, 2, 3],
  object: {
    foo: 'bar'
  },
  func() {
    console.log("I'm frozen");
  },
};

Object.freeze(frozen);
frozen.integer = 8;
frozen.string = 'Number';
frozen.array.pop();
frozen.object.foo = 'baz';
frozen.func = function() {
  console.log("I'm not really frozen");
};

console.log(frozen.integer);    // 4
console.log(frozen.string);     // String
console.log(frozen.array);      // [1, 2]
console.log(frozen.object.foo); // baz
console.log(frozen.func());     // I'm frozen

// object's references are frozen, but not the actual objects themselves -- those can still be modified
// a frozen object cannot be unfrozen


