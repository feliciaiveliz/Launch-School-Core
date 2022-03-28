/// (1) In the following code, when can JavaScript garbage collect each of the following arrays? [1], [2], and [1, 2].

let a = [1];

function add(b) { 
  a = a.concat(b); // collect [1] 
}

function run() {
  let c = [2]; 
  let d = add(c);
}

run(); // collect [2]
// after program ends: [1, 2]

/// (2) In the following code, when can JavaScript garbage collect the value ["Steve", "Edie"]?

function makeHello(names) {
  return function() {
    console.log('Hello, ' + names[0] + ' and ' + names[1] + '!');
  };
}

let helloSteveAndEdie = makeHello(['Steve', 'Edie']);

// either after the program ends or at any point in the program if we dereference the variable 'helloSteveAndEdie' or when Javascript collects the function referenced by 'helloSteveAndEdie'


