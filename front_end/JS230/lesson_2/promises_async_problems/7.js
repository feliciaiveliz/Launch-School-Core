// Without running it, what will the following code log to the console? This problem may be a bit challenging.

const promise = new Promise((resolve, reject) => {
  resolve("Got it!");
  reject("Oops.");
  resolve("Again!");
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

  // Got it! 
  // once a promise is resolved or rejected, any attempts after the fact will fail silently and be ignored