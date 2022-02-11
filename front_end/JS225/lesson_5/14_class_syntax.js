// class syntax wraps around pseudo-classical pattern

// pseudo-classical

function Point(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Point.prototype.onXAxis = function() {
  return this.y === 0;
};

Point.prototype.onYAxis = function() {
  return this.x === 0;
};

Point.prototype.distanceToOrigin = function() {
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
};

// class syntax

class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  onXAxis() {
    return this.y === 0;
  }

  onYAxis() {
    return this.x === 0;
  }

  distanceToOrigin() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }
}

let pointA = new Point(30, 40);
let pointB = new Point(20);

pointA instanceof Point;   // true
pointB instanceof Point;   // true

pointA.distanceToOrigin(); // 50
pointB.onXAxis();          // true

