let object = {
  a: 'hello',
  b: 'world',
  foo() {
    return this.a + ' ' + this.b;
  },
};

let bar = object.foo;
bar(); // undefined undefined

let baz = object.foo.bind(object);
baz(); // hello world

let object2 = {
  a: 'hi',
  b: 'there',
};

baz.call(object2); // hello world

/// how bind works

Function.prototype.bind = function (...args) {
  let fn = this; // current function context?
  let context = args.shift(); // first argument is context object

  return function () {
    return fn.apply(context, args);
  };
};
// returns a new function that calls the original function with the context supplied to bind
// no matter what you do to the returned function, you can't change the value of context

let greetings = {
  morning: 'Good morning, ',
  afternoon: 'Good afternoon, ',
  evening: 'Good evening, ',

  greeting(name) {
    let currentHour = (new Date()).getHours();

    if (currentHour < 12) {
      console.log(this.morning + name);
    } else if (currentHour < 18) {
      console.log(this.afternoon + name);
    } else {
      console.log(this.evening + name);
    }
  },
};

let spanishWord = {
  morning: 'Buenos dias, ',
  afternoon: 'Buenas tardes, ',
  evening: 'Buenas noches, ',
};

let spanishGreeter = greetings.greeting.bind(spanishWords);

spanishGreeter('Jose');
spanishGreeter('Juan');
// the greeting function is bound to the spanishWords object and the result is assigned to spanishGreeter
// Javascript uses spanishWords as the 'this' value
// greeting now cannot use any other context
