let obj1 = {
  a: 1,
  b: 2,
  f1: function () {
    console.log(this.b);
  }
};

let obj2 = {
  a: 11,
  b: 22,
  f2: function (func) {
    func();
  }
};

obj2.f2(obj1.f1); 
// undefined
// want to return 22

/////////////////////////////////////////////////////////

"use strict";
let obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj);
console.log(foo()); // logs
console.log(bar()); // logs

///////////////////////////

function bar() {
  console.log('good morning');
}

window.inner = {
  bar() {
    console.log('good afternoon');
  },
};

let obj = {
  inner: {
    bar() {
      console.log('good night');
    },

    foo() {
      bar();
    },
  },

  bar() {
    console.log('wake up');
  },

  foo() {
    this.inner.bar();
    inner.bar();
    bar();
  }
};

obj.foo(); 
// good night
// good afternoon
// good morning

///////////////////////////////////////////

let obj = {
  a : 'Hello',
  b : 'World',
  func : () => console.log(this.a)
};

let someVar = obj.func;

function anotherFunc(foo) {
  foo();
  foo();
}

anotherFunc(someVar);

//////////////////////////////////////////

function bar() {
  console.log('good morning');
}

global.inner = {
  bar() {
    console.log('good afternoon');
  },
};

let obj = {
  inner: {
    bar() {
      console.log('good night');
    },

    foo() {
      bar();
    },
  },

  bar() {
    console.log('wake up');
  },

  foo() {
    this.inner.bar();
    inner.bar();
    bar();
  }
};

let foo = function() {
  console.log('go to sleep');
}

function go(foo) {
  foo();
}

go(obj.foo);
// good afternoon 
// good morning
// good morning

//////////////////////////////////

let foo = function bar() {
  console.log(`I am working`);
  console.log(bar);
};

foo();    // ???
bar();    // ???

//////////////////////////////////

const Person = {
  init(name, age) {
    this.name = name;
    this.age = age;
    return this;
  },
  
  human() {
    console.log("Hello! My name is " + this.name + " and I'm a human being!");
  }
}
  
const Professor = Object.create(Person);
Professor.teach = function() {
  console.log("I'm teaching");
}

Professor.init = function(name, age, subject) {
  Person.init.call(this, name, age);
  this.subject = subject;
  return this;
}

let professor = Object.create(Professor).init('Randall', 61, 'Philosophy');


const Student = Object.create(Person);

Student.init = function(name, age, major) {
  Person.init.call(this, name, age);
  this.major = major;
  return this;
}

Student.study = function() {
  console.log("I'm studying");
}

let student = Object.create(Student).init('Roger', 20, 'Philosophy');

// Prototype Chain - student & gradStudent
console.log(Object.getPrototypeOf(student) === Student);
console.log(Object.getPrototypeOf(Student) === Person);
student.study()

// Prototype Chain - professor
console.log(Object.getPrototypeOf(professor) === Professor);
console.log(Object.getPrototypeOf(Professor) === Person);
console.log(Object.getPrototypeOf(Person) === Object.prototype);
professor.teach()

student.human()
professor.human()

/////////////////////////////////////////////////////////////////////////////////

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log("Hello!");
}

let felicia = new Person('felicia', 28);
felicia.sayHello();

function Student(name, age, major) {
  Person.call(this, name, age);
  this.major = major;
}

// Object.setPrototypeOf(Student.prototype, Person.prototype);
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
let stephen = new Student('Stephen', 28, 'math');

console.log(stephen);
console.log(stephen.sayHello());
console.log(stephen.constructor);
// console.log(Object.getPrototypeOf(felicia) === Person.prototype);
// console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
// console.log(Object.getPrototypeOf(Person) === Function.prototype);

/////////////////////////////////////////////////////////////////////////////

In JS there are some confusion about prototypes and many terms that sounds or looks similar. Explain shortly what the following concepts relates to:
// - prototype (always an object)
     - one object is inheriting methods/properties from another object
// - .prototype property
     - Is a function object that the constructor uses as the object prototype for the object it creates
// - [[Prototype]] property (Object.getPrototypeOf()) (all objects have [[Prototype]] property)
     - keeps track of the prototype
// - __proto__ (call like any other method)
     - non-hidden version of [[Prototype]]
     - same as [[Prototype]] in what it reference -> object' prototype
// - Object prototype
     - an object's prototype
// - Function prototype (.prototype)
- same as .prototype