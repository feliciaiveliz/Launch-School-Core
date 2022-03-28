// Todo Application

/*
RULES/REQUIREMENTS:
- todoManager: returns set of todos from todoList based on criteria
- todoList: object (array) that has collection of todo objects
- Todo: creates todo objects that have unique IDs

Todo:
-----
- Has properties: unique id, title, completed, month, year, description 
- Shared method(s): isWithinMonthYear(month, year)
- Properties: all values as strings

todoList:
---------
- Contains private collection of todos
- returns object of methods that can modify or work with array of todo objects
- return copy of collection array when a method or subset of it is returned by TodoManager
Methods: 
- adds todo, deletes todo, initializes collection of todo objects, updates todo, returns todo based on id

todoManager:
-----------
- works with todoList object (copy of list)
- return all todo objects
- return completed todos
- return month-year todos
- return month-year completed todos
*/

let Todo = (function() {
  let generateID = (function() {
    let id = 0;

    return function() {
      id += 1;
      return id;
    }
  })();

  function validTitle(title) {
    return (title !== undefined && typeof title === 'string' && title !== '');
  }

  function validMonth(month) {
    return ((month !== undefined && typeof month === 'string') &&
    (Number(month) >= 1 && Number(month) <= 12));
  }

  function validYear(year) {
    return (year !== undefined && typeof year === 'string' && year !== '');
  }

  function validDescription(description) {
    return (description !== undefined && typeof description === 'string' &&
    description !== '');
  }

  return function(title, month, year, description) {
    if (validTitle(title) && validMonth(month) && validYear(year) && 
    validDescription(description)) {
      this.id = generateID();
      this.title = title;
      this.completed = false;
      this.month = month;
      this.year = year;
      this.description = description;
    } else {
      return { invalidTodo: true };
    }
  }
})();

Todo.prototype.isWithinMonthYear = function(month, year) {
  if (this.month === month && this.year === year) {
    return true;
  } else {
    return false;
  }
};

let todoList = (function() {
  let list = [];

  function getTodo(id) {
    let todo = list.find(todo => todo.id === id);
    return todo;
  }

  return { 
    init(todos) { 
      todos.forEach(todo => {
        let values = Object.values(todo);
        let newTodo = new Todo(...values);
        if (newTodo.invalidTodo) {
          return "Could not create todo";
        } else {
          list.push(newTodo);
        }
      });
    },

    copyList() {
      return list.slice(0);
    },
    
    addTodo(title, month, year, description) {
      let todo = new Todo(title, month, year, description);
      list.push(todo);
    },

    deleteTodo(id) {
      let todo = getTodo(id);
      let index = list.indexOf(todo);
      list.splice(index, 1);
    },

    updateTodo(id, object) {
      let todo = getTodo(id);
      let info = Object.keys(object);
      todo[info] = object[info];
    },
    
    retrieveTodo(id) {
      if (getTodo(id)) {
        return getTodo(id); 
      } else {
        return "Todo does not exist with that id";
      }
    },
  }
})();

let todoManager = (function() {
  return {
    init(todoListObject) {
      this.todos = todoListObject.copyList();
      return this;
    },

    allTodos() {
      console.log(this.todos);
    },

    completedTodos() {
      let todosCompleted = this.todos.filter(todo => todo.completed === true);
      return todosCompleted;
    },

    timeframeTodos(timeframe) {
      if (typeof timeframe !== 'string') {
        return 'Invalid input for month and year';
      }
      
      timeframe = timeframe.split('-');
      let [month, year] = timeframe;
      let todos = this.todos.filter(todo => todo.month === month && todo.year === year);
      return todos;
    },

    timeframeCompletedTodos(timeframe) {
      if (typeof timeframe !== 'string') {
        return 'Invalid input for month and year';
      }

      let todos = this.timeframeTodos(timeframe).filter(todo => todo.completed === true);
      return todos;
    }
  }
})();

// [CONTAINER 1] - Creating Todo objects directly from Todo
let todo1 = new Todo('Mow lawn', '3', '2022', 'Mow lawn before 5pm');
let todo2 = new Todo('Vacuum carpet', '4', '2022', 'Check canister first');
console.log(todo1);
// {
//   id: 1,
//   title: 'Mow lawn',
//   completed: false,
//   month: '3',
//   year: '2022',
//   description: 'Mow lawn before 5pm'
// }
console.log(Object.getOwnPropertyNames(todo1));                      // [ 'id', 'title', 'completed', 'month', 'year', 'description' ]
console.log(Object.getPrototypeOf(todo1) === Todo.prototype);        // true
console.log(todo1.constructor === Todo);                             // true
console.log(Object.prototype.isPrototypeOf(Todo));                   // true
console.log(typeof Todo);                                            // 'function'
console.log(Todo.prototype);                                         // { isWithinMonthYear: [Function (anonymous)] }
console.log(todo1.isWithinMonthYear === todo2.isWithinMonthYear);    // true
console.log(todo2.isWithinMonthYear('4', '2022'));                   // true
console.log(todo1.isWithinMonthYear('5', '2021'));                   // false

let todo3 = new Todo('', '', '', '');
let todo4 = new Todo('Wipe tables', '33', '2022', 'Use new spray cleaner');
let todo5 = new Todo(['Clean car'], 7, 2022, 'Take out trash and wipe dashboard');

console.log(todo3);                                                  // returns { invalidTodo: true }
console.log(todo4);                                                  // returns { invalidTodo: true }
console.log(todo5);                                                  // returns { invalidTodo: true }

// Uncomment next 3 lines when testing Container 1 and Container 2 seperately and together
// todoList.addTodo('Mow lawn', '3', '2022', 'Mow lawn before 5pm');
// todoManager.init(todoList);
// todoManager.allTodos(); // returns array of one todo: mow lawn
// [
//   {
//     id: 1,
//     title: 'Mow lawn',
//     completed: false,
//     month: '3',
//     year: '2022',
//     description: 'Mow lawn before 5pm'
//   }
// ]

// [CONTAINER 2] - First pass with invalid inputs
// let todoData1 = {
//   title: 'Buy Milk',
//   month: '1',
//   year: '2017',
//   description: 'Milk for baby',
// };

// let todoData2 = {
//   title: 'Buy Apples',
//   month: '',
//   year: '2017',
//   description: 'An apple a day keeps the doctor away',
// };

// let todoData3 = {
//   title: 'Buy chocolate',
//   month: '1',
//   year: '2017',
//   description: 'For the cheat day',
// };

// let todoData4 = {
//   title: 'Buy Veggies',
//   month: '',
//   year: '',
//   description: 'For the daily fiber needs',
// };

// let todoSet1 = [todoData1, todoData2, todoData3, todoData4];
// todoList.init(todoSet1);
// todoManager.init(todoList);
// todoManager.allTodos(); // returns array of todos with valid inputs (missing 'buy apples' and 'buy veggies')
// [
//   {
//     id: 1,
//     title: 'Mow lawn',
//     completed: false,
//     month: '3',
//     year: '2022',
//     description: 'Mow lawn before 5pm'
//   },
//   {
//     id: 2,
//     title: 'Buy Milk',
//     completed: false,
//     month: '1',
//     year: '2017',
//     description: 'Milk for baby'
//   },
//   {
//     id: 3,
//     title: 'Buy chocolate',
//     completed: false,
//     month: '1',
//     year: '2017',
//     description: 'For the cheat day'
//   }
// ]

// [CONTAINER 3] - 2nd pass with valid inputs for all objects that will run the rest of the tests
// let data1 = {
//   title: 'Buy Milk',
//   month: '1',
//   year: '2017',
//   description: 'Milk for baby',
// };

// let data2 = {
//   title: 'Buy Apples',
//   month: '1',
//   year: '2017',
//   description: 'An apple a day keeps the doctor away',
// };

// let data3 = {
//   title: 'Buy chocolate',
//   month: '1',
//   year: '2017',
//   description: 'For the cheat day',
// };

// let data4 = {
//   title: 'Buy Veggies',
//   month: '2',
//   year: '2017',
//   description: 'For the daily fiber needs',
// };

// let todoSet2 = [data1, data2, data3, data4];
// todoList.init(todoSet2);
// todoManager.init(todoList);
// todoManager.allTodos(); // returns array of all 5 todo objects, including 'mow lawn' and todoSet2
// [
//   {
//     id: 1,
//     title: 'Mow lawn',
//     completed: false,
//     month: '3',
//     year: '2022',
//     description: 'Mow lawn before 5pm'
//   },
//   {
//     id: 2,
//     title: 'Buy Milk',
//     completed: false,
//     month: '1',
//     year: '2017',
//     description: 'Milk for baby'
//   },
//   {
//     id: 3,
//     title: 'Buy Apples',
//     completed: false,
//     month: '1',
//     year: '2017',
//     description: 'An apple a day keeps the doctor away'
//   },
//   {
//     id: 4,
//     title: 'Buy chocolate',
//     completed: false,
//     month: '1',
//     year: '2017',
//     description: 'For the cheat day'
//   },
//   {
//     id: 5,
//     title: 'Buy Veggies',
//     completed: false,
//     month: '2',
//     year: '2017',
//     description: 'For the daily fiber needs'
//   }
// ]

// todoList.retrieveTodo('2'); // return "Todo does not exist with that id"
// todoList.retrieveTodo(3);
// {
//   id: 3,
//   title: 'Buy Apples',
//   completed: false,
//   month: '1',
//   year: '2017',
//   description: 'An apple a day keeps the doctor away'
// }

// todoList.retrieveTodo(5);
// {
//   id: 5,
//   title: 'Buy Veggies',
//   completed: false,
//   month: '2',
//   year: '2017',
//   description: 'For the daily fiber needs'
// }

// todoList.updateTodo(1, { completed: true });
// todoList.updateTodo(2, { completed: true });
// todoList.updateTodo(3, { month: '2' });
// todoManager.init(todoList); // reflects changes in updated list
// todoManager.allTodos(); 
// [
//   {
//     id: 1,
//     title: 'Mow lawn',
//     completed: true,
//     month: '3',
//     year: '2022',
//     description: 'Mow lawn before 5pm'
//   },
//   {
//     id: 2,
//     title: 'Buy Milk',
//     completed: true,
//     month: '1',
//     year: '2017',
//     description: 'Milk for baby'
//   },
//   {
//     id: 3,
//     title: 'Buy Apples',
//     completed: false,
//     month: '2',
//     year: '2017',
//     description: 'An apple a day keeps the doctor away'
//   },
//   {
//     id: 4,
//     title: 'Buy chocolate',
//     completed: false,
//     month: '1',
//     year: '2017',
//     description: 'For the cheat day'
//   },
//   {
//     id: 5,
//     title: 'Buy Veggies',
//     completed: false,
//     month: '2',
//     year: '2017',
//     description: 'For the daily fiber needs'
//   }
// ]

// todoManager.completedTodos();
// [
//   {
//     id: 1,
//     title: 'Mow lawn',
//     completed: true,
//     month: '3',
//     year: '2022',
//     description: 'Mow lawn before 5pm'
//   },
//   {
//     id: 2,
//     title: 'Buy Milk',
//     completed: true,
//     month: '1',
//     year: '2017',
//     description: 'Milk for baby'
//   }
// ]

// todoManager.timeframeTodos('1-2017');
// [
//   {
//     id: 2,
//     title: 'Buy Milk',
//     completed: true,
//     month: '1',
//     year: '2017',
//     description: 'Milk for baby'
//   },
//   {
//     id: 4,
//     title: 'Buy chocolate',
//     completed: false,
//     month: '1',
//     year: '2017',
//     description: 'For the cheat day'
//   }
// ]

// todoManager.timeframeCompletedTodos('1-2017');
// [
//   {
//     id: 2,
//     title: 'Buy Milk',
//     completed: true,
//     month: '1',
//     year: '2017',
//     description: 'Milk for baby'
//   }
// ]

// todoManager.timeframeCompletedTodos('2-2017');     // [] 
// todoManager.timeframeCompletedTodos(2017);         // 'Invalid input for month and year'

// todoList.deleteTodo(4);
// todoManager.allTodos();
// [
//   {
//     id: 1,
//     title: 'Mow lawn',
//     completed: true,
//     month: '3',
//     year: '2022',
//     description: 'Mow lawn before 5pm'
//   },
//   {
//     id: 2,
//     title: 'Buy Milk',
//     completed: true,
//     month: '1',
//     year: '2017',
//     description: 'Milk for baby'
//   },
//   {
//     id: 3,
//     title: 'Buy Apples',
//     completed: false,
//     month: '2',
//     year: '2017',
//     description: 'An apple a day keeps the doctor away'
//   },
//   {
//     id: 4,
//     title: 'Buy chocolate',
//     completed: false,
//     month: '1',
//     year: '2017',
//     description: 'For the cheat day'
//   },
//   {
//     id: 5,
//     title: 'Buy Veggies',
//     completed: false,
//     month: '2',
//     year: '2017',
//     description: 'For the daily fiber needs'
//   }
// ]

// reflects changes to original list without deleted item 
// todoManager.init(todoList);
// todoManager.allTodos();
// [
//   {
//     id: 1,
//     title: 'Mow lawn',
//     completed: true,
//     month: '3',
//     year: '2022',
//     description: 'Mow lawn before 5pm'
//   },
//   {
//     id: 2,
//     title: 'Buy Milk',
//     completed: true,
//     month: '1',
//     year: '2017',
//     description: 'Milk for baby'
//   },
//   {
//     id: 3,
//     title: 'Buy Apples',
//     completed: false,
//     month: '2',
//     year: '2017',
//     description: 'An apple a day keeps the doctor away'
//   },
//   {
//     id: 5,
//     title: 'Buy Veggies',
//     completed: false,
//     month: '2',
//     year: '2017',
//     description: 'For the daily fiber needs'
//   }
// ]

// console.log(list); // ReferenceError: list is not defined
// console.log(todoManager.todos); // returns undefined
// console.log(Todo);