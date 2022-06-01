// Write a randomizer function that accepts n callbacks and calls each callback at some random point in time between now and 2 * n seconds from now. For instance, if the caller provides 5 callbacks, the function should run them all sometime within 10 seconds.

// While running, randomizer should log the elapsed time every second: 1, 2, 3, ..., 2 * n.

// call callback at a random point in time
// take number of callbacks * 2 to get the time needed
// 5 callbacks = 10 seconds
// log elapsed time every seconds: 1, 2, 3, callback1, 4, etc.

// - put all callbacks into an array
// - loop for callbacks array length * 2
// - use setTimeout to log the current number every 1 second

// - iterate over the callbacks array and for each callback
//   - specify at what point in time to call the callback
//   - get random number to use as the timestamp to call
//     - Math.floor(Math.random() * 1000) + 1






function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  let timeLimit = callbacks.length * 2;

  callbacks.forEach(callback => {
    let randomTime = Math.floor(Math.random() * timeLimit) + 1;
    setTimeout(callback, randomTime * 1000);
  });

  for (let i = 1; i <= timeLimit; i += 1) {
    setTimeout(() => console.log(i), i * 1000);
  }
}

randomizer(callback1, callback2, callback3);
