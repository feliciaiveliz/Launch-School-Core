// Write a randomizer function that accepts n callbacks and calls each callback at some random point in time between now and 2 * n seconds from now. For instance, if the caller provides 5 callbacks, the function should run them all sometime within 10 seconds.

// While running, randomizer should log the elapsed time every second: 1, 2, 3, ..., 2 * n.

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
  if (callbacks.length < 1) {
    return;
  }

  let end = 2 * callbacks.length;
  let timeElapsed = 0;

  let timeLogger = setInterval(() => {
    timeElapsed += 1;
    console.log(timeElapsed);

    if (timeElapsed >= end) {
      clearInterval(timeLogger);
    }
  }, 1000);

  callbacks.forEach(callback => {
    let executeTime = Math.floor(Math.random() * end * 1000);
    setTimeout(callback, executeTime);
  });
}

function randomizer(...callbacks) {
  const totalSeconds = 2 * callbacks.length;
  let executeTime = Math.floor(Math.random() * totalSeconds * 1000) + 1;

  for (let i = 1; i <= totalSeconds; i += 1) {
    setTimeout(() => console.log(i), i * 1000);
  }

  callbacks.forEach(callback => {
    setTimeout(callback, executeTime());
  });
}

randomizer(callback1, callback2, callback3);