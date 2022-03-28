// using iife to return a function with access to private data

let studentId = 0;

function generateStudentId() {
  studentId += 1;
  return studentId;
}

// the risk is that studentId can be reassigned because it is globally scoped

// function is responsible for generating studentId without exposing ID to be reassigned

let generateStudentId = (function() {
  let studentId = 0; // private to generateStudentId

  return function() { // closure that has access to studentId
    studentId += 1;
    return studentId;
  };
})(); // initializes only one studentId in generateStudentId function scope

/// using iife to return an object with access to private data

let inventory = {
  stocks: [],
  stockCounts() {
    this.stocks.forEach(function(stock) {
      console.log(stock.name + ': ' + String(stock.count));
    });
  },
};

// pushing stock objects through the stock array

inventory.stocks.push({
  name: 'ballpen',
  count: 5,
});

inventory.stockCounts();
// logs:
// ballpen: 5

inventory.stocks.push({
  name: 'ballpen',
  count: 5,
});

inventory.stockCounts();
// logs
// ballpen: 5
// ballpen: 5

// add method on inventory object for adding a stock object that validates a unique name

let inventory = {
  stocks: [],
  stockCounts() {
    this.stocks.forEach(function(stock) {
      console.log(stock.name + ': ' + String(stock.count));
    });
  },

  addStock(newStock) {
    let isValid = this.stocks.every(function(stock) {
      return newStock.name !== stock.name;
    });

    if (isValid) { this.stocks.push(newStock) }
  },
};

// make the stocks array private by creating it as a local variable private to the iife

let inventory = (function() {
  let stocks = [];

  return {
    stockCounts() {
      stocks.forEach(function(stock) {
        console.log(stock.name + ': ' + String(stock.count));
      });
    },

    addStock(newStock) {
      let isValid = stocks.every(function(stock) {
        return newStock.name !== stock.name;
      });

      if (isValid) { stocks.push(newStock) }
    },
  };
})();

console.log(typeof inventory); // object

// as an iife, we can can still return an object, but have the functionality of creating a local variable as we do in functions
// combines function and object
// invoke immediately to set one 'stocks' array object

// refactor

let inventory = (function() {
  let stocks = [];

  function isValid(newStock) {  // extract function that validates stock items name to private function 
    return stocks.every(function(stock) {
      return newStock.name !== stock.name;
    });
  }

  return {  // the methods stockCounts and addStock form closures over the stocks array
    stockCounts() {
      stocks.forEach(function(stock) {
        console.log(stock.name + ': ' + String(stock.count));
      });
    },

    addStock(newStock) {
      if (isValid(newStock)) { stocks.push(newStock) }
    },
  };
})();
