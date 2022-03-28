let pointA = {
  x: 30,
  y: 40,

  onXAxis() {
    return this.y === 0;
  },

  onYAxis() {
    return this.x === 0;
  },

  distanceToOrigin() {
    return (Math.sqrt((this.x * this. x) + (this.y * this.y));
  },
};

pointA.distanceToOrigin();  // 50
pointA.onXAxis();           // false
pointA.onYAxis();           // false

/// pseudo-classical pattern

// combination of constructor and prototype pattern
// use constructor to set states for objects
// use prototype object to put shared methods or behaviors

let Point = function(x = 0, y = 0) {
  this.x = x;
  this.y = y;
};

Point.prototype.onXAxis = function() {
  return this.y === 0;
};

Point.prototype.onYAxis = function() {
  return this.x === 0;
};

Point.prototype.distanceToOrigin = function() {
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
};

let pointA = new Point(30, 40); // use new to create object
let pointB = new Point(20); 

pointA instanceof Point; // use instanceof to check type
pointB instanceof Point;

pointA.distanceToOrigin(); // 50
pointB.onXAxis();          // true

// OLOO
// constructor pretense with constructor functions as fake classes
// with oloo, put shared methods on a prototype object, use Object.create

let Point = {
  onXAxis() {
    return this.y === 0;
  },

  onYAxis() {
    return this.x === 0;
  },

  distanceToOrigin() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  },

  init(x, y) {
    this.x = x;
    this.y = y;
    return this;
  },
};

let pointA = Object.create(Point).init(30, 40);

Point.isPrototypeOf(pointA);
pointA.distanceToOrigin(); // 50
pointA.onXAxis();          // false

/// provide default values instead of init method

let Point = {             // capitalized name for the prototype as a convntion
  x: 0,
  y: 0,

  onXAxis() {             // shared methods defined on the prototype
    return this.y === 0;
  },

  onYAxis() {
    return this.x === 0;
  },

  distanceToOrigin() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  },

  init(x, y) {            // optional init method to set states
    this.x = x;
    this.y = y;
    return this;
  },
};

let pointB = Object.create(Point);

Point.isPrototypeOf(pointB);
pointB.distanceToOrigin();          // 0
pointB.onXAxis();                   // true


