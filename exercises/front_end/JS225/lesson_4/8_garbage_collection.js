let name = "Sarah"; // runtime allocates the memory
console.log(name); // Sarah

/// 

function logName() {
  let name = 'Sarah';
  console.log(name);
}

logName(); // Sarah
// Sarah is now eligible for GC
// the name variable was declared within the scope of the logName function
// this means that when the function is finished executing, the variable is no longer accessible to the code

///

function logName() {
  let name = 'Sarah'; // Sarah 1 -- this variable is eligible for GC
  console.log(name);
  return name;
}

let loggedName = logName(); // Sarah 2 -- this variable is NOT eligible for GC

/// store value in property

function logName() {
  let name = {
    firstName: "Sarah",
  };

  console.log(name.firstName);
  return name; // returns name object to caller
}

let loggedName = logName(); // loggedName is assigned value in 'name' (object)
// the 'name' object is the same name object defined on lines 29 - 31

///

function go() {
  let foo = {};
  let bar = { qux: foo };
  foo.xyz = bar;
}

go(); // neither foo or bar are eligible for GC
// bar holds a reference to 'foo' in its 'qux' property
// foo holds a reference to 'bar' in its 'xyz' property
// both objects have a reference count of 2 
// 1 is for the variable assigned to the object and the 2nd is the property of the other object
// the reference count of both foo and bar decrements by 1 when go() is executed because those are local variables
// however both objects still exist in memory because they are referenced as properties of the other object, so 
// they won't be GCd until the program ends

///

function go() {
  let foo = {};
  let bar = { qux: foo };
  foo.xyx = bar;
}

for (let count = 0; count < 1000000; count += 1) {
  go(); 
}
// there are 2000000 objects in the heap but ineligible for GC




