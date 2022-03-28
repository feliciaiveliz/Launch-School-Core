// factory functions or the Factory Object Creation Pattern
// This allows us to create objects based off of a pre-defined template

function createPerson(firstName, lastName) {
  let person = {};
  person.firstName = firstName;
  person.lastName = lastName || '';
  person.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  };

  return person; // return the person object
}

let john = createPerson('John', 'Doe');
let jane = createPerson('Jane'); 
john.fullName(); // John Doe
jane.fullName(); // Jane

/// return object literal in factory function

function createPerson(firstName, lastName = '') {
  return {
    firstName,
    lastName,
    fullName() {
      return (this.firstName + ' ' + this.lastName).trim();
    },
  };
}

