// Without running the following code, what will it log to the console? When will the logged values appear on the console?

function after1s(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
  });
}

async function test(input) {
  const a = await after1s(2);
  const b = await after1s(3);
  return input * a * b;
}

test(3).then((value) => console.log(value));

// 18