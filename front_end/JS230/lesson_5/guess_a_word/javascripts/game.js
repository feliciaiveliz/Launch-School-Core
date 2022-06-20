document.addEventListener('DOMContentLoaded', () => {
  const message = document.querySelector('#message');
  const letters = document.querySelector('#spaces');
  const guesses = document.querySelector('#guesses');
  const apples = document.querySelector('#apples');
  const replay = document.querySelector('#replay');

  let chooseRandomWord = (() => {
    let words = ['pumpkins', 'ghosts', 'witches', 'spooky', 'halloween'];
    
    return () => {
      let word = words[Math.floor(Math.random() * words.length)];
      words.splice(words.indexOf(word), 1);
      return word;
    } 
  })();
    
  class Game {
    constructor() {
      this.guesses = 6;
      this.correctSpaces = 0;
      this.lettersGuessed = [];
      this.incorrectGuesses = 0;
      this.word = chooseRandomWord();
  
      if (!this.word) {
        this.displayMessage("Sorry! I've run out of words!");
        this.hideReplayLink();
        return this;
      }
  
      this.word = this.word.split('');

      this.bind();
      this.setClass();
      this.hideReplayLink();
      this.emptyGuesses();
      this.createBlanks();
      this.setGameStatus();
      this.displayMessage("");
    }
  
    createBlanks() {
      let spaces = (new Array(this.word.length + 1)).join("<span></span>");
      let spans = letters.querySelectorAll('span'); // selects spans from previous game

      spans.forEach(span => {  // removes spans from previous game
        span.parentNode.removeChild(span);
      });
      letters.insertAdjacentHTML('beforeend', spaces); // adds new spans for current game/word
      this.spaces = document.querySelectorAll("#spaces span"); // resets the spans for the next game (on next game, forEach loop will clear/reset the spans from previous game to 0)
    }

    fillBlanksFor(letter) {
      let self = this;
      debugger;
      this.word.forEach((character, index) => {
        if (letter === character) {
          self.spaces[index].textContent = letter;
          self.correctSpaces++;
        }
      });
    }

    emptyGuesses() {
      let spans = guesses.querySelectorAll('span');
      spans.forEach(span => {
        span.parentNode.removeChild(span);
      });
    }

    renderGuess(letter) {
      let span = document.createElement('span');
      span.textContent = letter;
      guesses.appendChild(span);
    }
    
    renderIncorrectGuess(letter) {
      this.incorrectGuesses++;
      this.renderGuess(letter);
      this.setClass();
    }

    duplicateGuess(letter) {
      let duplicate = this.lettersGuessed.indexOf(letter) !== -1;
      if (!duplicate) { this.lettersGuessed.push(letter); }
      return duplicate;
    }

    setClass() {
      apples.classList.remove(...apples.classList);
      apples.classList.add('guess_' + this.incorrectGuesses);
    }

    displayMessage(text) {
      message.textContent = text;
    }

    showReplayLink() {
      replay.classList.add('visible');
    }

    hideReplayLink() {
      replay.classList.remove('visible');
    }

    processGuess(event) {
      let letter = event.key; // letter for keypress (starts game)

      if (notALetter(letter)) return;
      if (this.duplicateGuess(letter)) return;

      if (this.word.includes(letter)) {
        this.fillBlanksFor(letter);
        this.renderGuess(letter);

        if (this.correctSpaces === this.spaces.length) this.win();
      } else {
        this.renderIncorrectGuess(letter);
      }

      if (this.incorrectGuesses === this.guesses) {
        this.lose();
      }
    }

    win() {
      this.unbind();
      this.displayMessage('You win!');
      this.showReplayLink();
      this.setGameStatus('win');
    }

    lose() {
      this.unbind();
      this.displayMessage("Sorry! You're out of guesses");
      this.showReplayLink();
      this.setGameStatus('lose');
    }

    setGameStatus(status) {
      document.body.classList.remove('win', 'lose');
      if (status) document.body.classList.add(status);
    }

    bind() {
      this.processGuessHandler = event => this.processGuess(event);
      document.addEventListener('keyup', this.processGuessHandler);
    }

    unbind() {
      document.removeEventListener('keyup', this.processGuessHandler);
    }
  }

  function notALetter(letter) {
    return letter < 'a' || letter > 'z';
  }

  new Game();

  replay.addEventListener('click', event => {
    event.preventDefault();
    new Game();
  });
});

