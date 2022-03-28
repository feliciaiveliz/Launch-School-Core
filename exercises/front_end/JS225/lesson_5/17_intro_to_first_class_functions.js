// first class functions can be stored in a variable, be passed in as an argument to another function, be returned by functions, be stored in some data structure, and hold their own properties and methods

// definition and invocation
function speak(string) {
  console.log(string);
}

speak('hello'); // hello

// store in a variable
let talk = speak;
talk('hi');     // hi

// pass as argument to a function
// return from function
function functionReturner(fn) {
  return fn;
}
let chat = functionReturnern(talk);
chat('good morning'); // good morning

// store in a data structure
let myFuncs = [talk];
myFuncs[0]('good afternoon'); // good afternoon

// owns properties
talk.myProperty = 'bananas';
console.log(talk.myProperty); // logs 'bananas'

