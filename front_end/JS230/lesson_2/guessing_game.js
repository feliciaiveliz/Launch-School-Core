document.addEventListener('DOMContentLoaded', () => {
  let answer;
  let guesses;
  let p = document.querySelector('p');
  let link = document.querySelector('a');
  let form = document.querySelector('form');
  let input = document.querySelector('#guess');
  let guessBtn = document.querySelector('[type="submit"]');

  function newGame() {
    guessBtn.disabled = false;
    form.reset();
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    p.textContent = 'Guess a number from 1 to 100';
  }
  
  form.addEventListener('submit', event => {
    event.preventDefault();
    let guess = parseInt(input.value, 10);
    let message;
    guesses += 1;
    
    if (Number.isNaN(guess)) {
      message = 'Please enter a number';
    } else if (guess > answer) {
      message = `My number is lower than ${String(guess)}`;
    } else if (guess < answer) {
      message = `My number is higher than ${String(guess)}`;
    } else {
      message = `You guessed it! It took you ${guesses} guesses.`;
      guessBtn.disabled = true;
    }
    
    p.textContent = message;
  });
  
  link.addEventListener('click', event => {
    event.preventDefault();
    newGame();
  });
  
  newGame();
});
