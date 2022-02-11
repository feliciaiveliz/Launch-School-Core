let myPet = {
  type: 'Dog',
  name: 'Spot',
};

console.log(`I have a pet ${myPet.type} named ${myPet.name}.`);

///

function createAndLogPet() {
  let myPet = {
    type: 'Dog',
    name: 'Spot',
  };

  console.log(`I have a pet ${myPet.type} name ${myPet.name}.`);
}

// This approach works because we can isolate myPet from other declarations
// of myPet in the program
// The problem is that we don't know if there is already a 'createAndLogPet()' function in the global scope

///

(function() {
  let myPet = {
    type: 'Dog',
    name: 'Spot',
  };

  console.log(`I have a pet ${myPet.type} named ${myPet.name}.`);
})();

// this code has a private scope for myPet and doesn't clash with other functions

// pass values into iife

(function(type, name) {
  let myPet = {
    type,
    name,
  };

  console.log(`I have a pet ${myPet.type} named ${myPet.name}.`);
})('Dog', 'Spot');

// this approach works because it encapsulates the 'myPet' object into the scope of 
// the function without having to create a named function in the global scope. 
// It's also good to have it execute just one place in the program if it's only needed one time.
// In this case, we don't need to write a function that will log a string with info from an object, we can 
// do it all in one iife.