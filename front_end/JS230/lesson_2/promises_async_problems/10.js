function after1s(x, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, ms);
  });
}

async function test1(input) {
  const a = await after1s(2, 2000); // resolve with 2 after 2 seconds
  const b = await after1s(3, 2000); // resolve with 3 after 2 seconds (4 total here)
  return input * a * b; // 12 after 4 seconds
}

async function test2(input) {
  const a = await after1s(2, 1000); // resolve with 1 after 1 second
  const b = await after1s(3, 1000); // resolve with 3 after 1 second (2 total here)
  return input * a * b; // 18 after 2 seconds
}

test1(2).then((value) => console.log(value));
test2(3).then((value) => console.log(value));

// FIRST: 18 after two seconds 
// SECOND: 12 after 4 seconds (from start, so 2 seconds after 18 is logged`)