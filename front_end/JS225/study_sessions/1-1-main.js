// SCENARIO
// Device class
  // turnOn method
  // powered property (boolean)
// Computer subclass
  // turnOff method
  // screenSize property
// HP instance of computer subclass

// oloo

let Device = {
  init() {
    this.powered = false;
    return this;
  },
  
  turnOn() {
    this.powered = true;
  },
};

let Computer = Object.create(Device); // Device becomes prototype of Computer
Computer.init = function(screenSize) {
  // this.powered = true;
  this.screenSize = screenSize;
  return this;
};

let hp = Object.create(Computer).init(500);
// console.log(hp.powered); // undefined
hp.turnOn(); // 
// console.log(hp.powered); // true

// Separating the steps of: 
//   - Defining state on an instance.
//   - Setting up inheritance of methods for instances.


// First, we'll focus on setting up method inheritance. 
// Device has two methods: `init` and `turnOn`
console.log(Device);

// Object.create sets up method inheritance between `Computer` and `Device`.

// Problem 2: 
// How do we get state defined directly on instance objects? 
// I want to make sure no state ends up directly on `Device` or `Computer`, just instances. 
// The `init` method of `Device` will set state on all Device instanstes when called on a Device instance.
const ipod = Object.create(Device).init();
console.log(ipod.hasOwnProperty('powered')); // true

// How do we get state directly on instances of `Computer`? How do we get `powered` direclty onto a Computer instance? 

// NEXT: Lexical Scope

// SCENARIO
// Device class
  // turnOn method
  // powered property (boolean)
// Computer subclass
  // turnOff method
  // screenSize property
// HP instance of computer subclass

// class

class Device {
  constructor() {
    this.powered = false;
  }
  
  turnOn() {
    this.powered = true;
  }
  
  describe() {
    console.log("I'm a device!");
  }
}

class Computer extends Device {
  constructor(screenSize) {
    super();
    this.screenSize = screenSize;
  }
  
  turnOff() {
    this.powered = false; 
  }
}

let hp = new Computer(500);
console.log(hp);
console.log(hp instanceof Computer); // true
console.log(Object.getPrototypeOf(hp) === Computer.prototype); // true
console.log(hp.constructor === Computer); // true
console.log(Device.prototype.isPrototypeOf(hp)); // true
console.log(Object.getOwnPropertyNames(hp)); // ['powered', 'screenSize']
console.log(hp.describe()); // I'm a device!