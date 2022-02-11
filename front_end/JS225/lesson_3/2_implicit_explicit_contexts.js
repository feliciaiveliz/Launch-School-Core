function example() {
  return this;
}

example(); // Window { ... } 

///

let object = {
  example() {
    return this;
  },
};

object.example() === object; // true
let exampleFunction = object.example;
exampleFunction(); // Window { ... }

/// 

"use strict";

function example() {
  return this;
}

example(); // undefined

/// 

let object = {
  example() {
    return this;
  },
};

object.example() === object; // true

/// 

let object = {
  example() {
    return this;
  },
};

let runExample = object.example;

console.log(runExample() === window); // true
console.log(runExample() === object); // false

///

let object = {
  example() {
    return this;
  },
};

let runExample = object.example();

console.log(runExample === window); // false
console.log(runExample === object); // true

/// call on function

name = 'Felicia';

let object = {
  name: 'Kayla',
};

function greet() {
  return this.name;
}

greet();            // Felicia
greet.call(object); // Kayla

/// call on method

let sanAntonio = {
  a: 'san',
  b: 'antonio',
  logCity() {
    return this.a + ' ' + this.b; 
  }
}

let wichitaFalls = {
  a: 'wichita',
  b: 'falls',
}

sanAntonio.logCity.call(wichitaFalls); // 'wichita falls'

/// call on method

let sanAntonio = {
  a: 'san',
  b: 'antonio',
  logCity(state) {
    return this.a + ' ' + this.b + ', ' + state; 
  }
}

let wichitaFalls = {
  a: 'wichita',
  b: 'falls',
}

sanAntonio.logCity.call(wichitaFalls, 'texas'); // 'wichita falls, texas'

/// apply

let sanAntonio = {
  a: 'San',
  b: 'Antonio',
};

let santaFe = {
  a: 'Santa',
  b: 'Fe',
};

function logCity(state, location) {
  return `${this.a} ${this.b} is located in the ${location} part of ${state}.`;
}

console.log(logCity.apply(sanAntonio, ['Texas', 'central'])); // San Antonio is located in the central part of Texas.
console.log(logCity.apply(santaFe, ['New Mexico', 'northern'])); // Santa Fe is located in the northern part of New Mexico.

///

function foo() {
  return this;
}

let context = foo();
console.log(context); // window
console.log(context === window); // true

///

'use strict';

function foo() {
  return this;
}

let context = foo();
console.log(context); // undefined

/// 

let obj = {
  foo() {
    return this;
  },
};

let context = obj.foo();

console.log(context); // obj {foo: f}

///

var message = 'Hello from global scope';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage(); // Hello from global scope

let bar = {
  message: "Hello from the function scope",
};

bar.deliverMessage = deliverMessage;

bar.deliverMessage(); // Hello from function scope

///

var a = 10; // what happens when changed to 'let'?
let b = 10;
let c = {
  a: -10,
  b: -10,
//   add() {
//     return this.a + b;
//   }
};

function add() {
  return this.a + b;
}

c.add = add;

console.log(add()); // 20
console.log(c.add()); // 0

///

let foo = {
  a: 1,
  b: 2,
};

let bar = {
  a: 'abc',
  b: 'def',
  add() {
    return this.a + this.b;
  },
};

bar.add.call(foo); // 3

/// apply

let sanAntonio = {
  a: 'San',
  b: 'Antonio',
};

let santaFe = {
  a: 'Santa',
  b: 'Fe',
};

function logCity(state, location) {
  return `${this.a} ${this.b} is located in the ${location} part of ${state}.`;
}

console.log(logCity.apply(sanAntonio, ['Texas', 'central'])); // San Antonio is located in the central part of Texas.
console.log(logCity.apply(santaFe, ['New Mexico', 'northern'])); // Santa Fe is located in the northern part of New Mexico.

///

function book() {console.log('hi from book?')};
book.apply(sanAntonio);

// let a = 1;
// let foo;
// let obj;

// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
// }

// Foo.call(this);

// // foo = new Foo();  //2

// // foo.bar(); //2
// Foo(); //2
// console.log(this);

// obj = {};
// Foo.call(this);
// //console.log(obj);
// obj.bar();

// console.log(this.a);

///

let fruitsObj = {
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
  title: 'A Collection of Fruit',
};

function outputList() {
  console.log(this.title + ':');

  let args = [].slice.call(arguments);

  args.forEach(function(elem) {
    console.log(elem);
  });
}

outputList.apply(fruitsObj, fruitsObj.list); 
// A Collection of Fruit:
// Apple
// Banana
// Grapefruit
// Pineapple
// Orange

///






