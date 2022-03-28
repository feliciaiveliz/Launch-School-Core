function makeList() {
  let items = [];

  return function(todo) {
    let index;
    if (todo) {
      index = items.indexOf(todo);
      if (index === -1) {
        items.push(todo);
        console.log(todo + ' added!');
      } else {
        items.splice(index, 1);
        console.log(todo + ' removed!');
      }
    } else {
      if (items.length === 0) {
        console.log('The list is empty');
      } else {
        items.forEach(todo => {
          console.log(todo);
        });
      }
    }
  }
}

// (1) improve interface by returning an object from makeList instead of single function

function makeList() {
  return {
    items: [],

    add(item) {
      if (!this.items.includes(item)) {
        this.items.push(item);
        console.log(item + ' added!');
      }
    },

    list() {
      this.items.forEach(item => {
        console.log(item);
      });
    },

    remove(item) {
      let index = this.items.indexOf(item);
      this.items.splice(index, 1);
      console.log(item + ' removed!');
    },
  }
}

let list = makeList();
list.add('peas'); // peas added!
list.list(); // peas
list.add('corn'); // corn added!
list.list(); // peas corn
list.remove('peas'); // peas removed
list.list(); // corn

// (2) Update the implementation from problem 1 so that it retains the use of an object with methods but prevents outside access to the items the object stores internally.

function makeList() {
  let items = [];

  return {
    add(item) { // closure formed here that makes use of the items array
      if (!items.includes(item)) { 
        items.push(item);
        console.log(item + ' added!');
      }
    },

    list() {
      items.forEach(item => {
        console.log(item);
      });
    },

    remove(item) {
      let index = items.indexOf(item);
      items.splice(index, 1);
      console.log(item + ' removed!');
    },
  }
}

let list = makeList();
list.add('peas'); // peas added!
list.list(); // peas
list.add('corn'); // corn added!
list.list(); // peas corn
list.remove('peas'); // peas removed
list.list(); // corn