// (1) Write a function that returns the object on a given object's prototype chain where a property is defined. See the example code below:

// create a loop
// starting with the curret object, check if the property is on the object
// if it is, return that object
// if it's not, go to the next object in the chain
// if the current object is null, return null

function getDefiningObject(object, propKey) {
  let currentObject = object;

  while (currentObject) {
    if (currentObject.hasOwnProperty(propKey)) {
      return currentObject;
    } else {
      currentObject = Object.getPrototypeOf(currentObject);
    }
  }

  return null;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);  // foo prototype for all objects
let baz = Object.create(bar);  // bar prototype of baz
let qux = Object.create(baz);  // baz prototype of qux

bar.c = 3; // define property on bar

console.log(getDefiningObject(qux, 'c') === bar); // true
console.log(getDefiningObject(qux, 'e'));         // null

/// (2) Write a function to provide a shallow copy of an object. The object that you copy should share the same prototype chain as the original object, and it should have the same own properties that return the same values or objects when accessed. Use the code below to verify your implementation:

function shallowCopy(object) {
  let copy = Object.create(Object.getPrototypeOf(object));

  Object.getOwnPropertyNames(object).forEach(prop => {
    copy[prop] = object[prop];
  });

  return copy;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

let baz = shallowCopy(bar);
console.log(baz.a);       // 1
baz.say();                // c is 3
console.log(baz.hasOwnProperty('a'));  // false
console.log(baz.hasOwnProperty('b'));  // false

/// (3) Write a function that extends an object (destination object) with contents from multiple objects (source objects).

function extend(destination, ...args) {
  args.forEach(object => {
    Object.keys(object).forEach(key => {
      destination[key] = object[key];
    });
  });

  return destination;
}

let foo = {
  a: 0, 
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe',
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodbye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);
console.log(object.b.x);        // 1
console.log(object.sayHello()); // Hello, Joe

// array of arguments
// return the empty argument