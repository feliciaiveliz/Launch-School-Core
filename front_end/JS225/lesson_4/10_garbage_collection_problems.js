// (1) Is JavaScript a garbage-collected language, and if so, what does this entail?
// Yes it is. This means that values that are no longer referenced by any variables or closures can be collected by Javascript.
// Javascript handles memory deallocation.

// (2) Are either of the values 1 or ['this is an array eligible for garbage collection on line 5? What about on line 10?

let myNum = 1;

function foo() {
  let myArr = ['this is an array'];
  // what is eligible for GC here?
}

foo();

// what is eligible for GC here?

// more code
// 1 is not eligible for GC on either line because primitive values are stored on the stack, thus they do not participate in garbage collection
// ['this is an array'] is eligible for GC on line 10 because it is created and scoped within 'foo', therefor it cannot be used by any other part of the program,
// making it eligible for GC

/// (3) Is the object created and assigned to foo on line 11 eligible for garbage collection on line 10?

function makeGreeting() {
  let foo = { greeting: 'hello' };
  return function(name) {
    foo.name = name;
    return foo;
  };
}

let greeting = makeGreeting(); 

// is the object eligible for GC here?

// more code
// No it is not eligible, this is because the value referenced by 'foo' is returned as part of the returned anonymous function within 'makeGreeting'
// This value is then assigned to 'greeting', and as long as 'greeting' exists, the object is still being referneced and thus cannot be collected. 

/// (4) Will the object {} ever be eligible for garbage collection?

let bash = {};

// Yes, only after the program ends. This is because 'bash' is a globally scoped variable and since it is avaible to the entire program, JS can't collect it unless it knows for
// sure that it won't be referenced again.
