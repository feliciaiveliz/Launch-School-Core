let answerPrototype = {
  get() {
    return this.val;
  }
};

let lifeAnswer = Object.create(answerPrototype); // answerPrototype is the prototype of 'lifeAnswer'
lifeAnswer.val = 42; // set property val to 42 on 'lifeAnswer' object
console.log(lifeAnswer); // { val: 42 }
console.log(lifeAnswer.get()); // 42
console.log(lifeAnswer.hasOwnProperty('val')); // true
console.log(answerPrototype.hasOwnProperty('val')); // false

let dessertAnswer = Object.create(answerPrototype); // answerPrototype is the prototype of desserAnswer
dessertAnswer.val = 3.14159
console.log(dessertAnswer.get()); // 3.14159

let firmAnswerPrototype = Object.create(answerPrototype);
firmAnswerPrototype.get = function() {
  return answerPrototype.get.call(this) + '!!';
};

let luckyAnswer = Object.create(firmAnswerPrototype);
luckyAnswer.val = 7;
console.log(luckyAnswer.get()); // '7!!'

/// Prototypal Model
class Answer {
  constructor(value) {
    this._val = value;
  }

  get() {
    return this._val;
  }
}

let lifeAnswer = new Answer(42);
lifeAnswer.get(); // 42

let desserAnswer = new Answer(3.14159);
dessertAnswer.get(); // 3.14159

class firmAnswer extends Answer {
  constructor(value) {
    super(value);
  }

  get() {
    return super() + '!!';
  }
};

let luckyAnswer = new firmAnswer(7);
luckyAnswer.get(); // '7!!'
