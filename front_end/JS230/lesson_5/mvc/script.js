class Model {
  constructor() {
    this.todos = [
      { id: 1, text: 'Journal', complete: false },
      { id: 2, text: 'Read book', complete: false },
      { id: 3, text: 'Make coffee', complete: false },
    ];
  }

  bindTodoListChanged(callback) {
    this.onTodoListChanged = callback;
  } // now model has property method 'onTodoListChanged' that references the callback of the controller 'onTodoListChanged'

  addTodo(todoText) {
    let todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText,
      complete: false,
    };

    this.todos.push(todo);
    this.onTodoListChanged(this.todos);
  }

  editTodo(id, updatedText) {
    this.todos = this.todos.map(todo => {
      return todo.id === id ? { id: todo.id, text: updatedText, complete: todo.complete } : todo;
    });

    this.onTodoListChanged(this.todos);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);

    this.onTodoListChanged(this.todos);
  }

  toggleTodo(id) {
    this.todos = this.todos.map(todo => {
      return todo.id === id ? { id: todo.id, text: todo.text, complete: !todo.complete } : todo;
    });

    this.onTodoListChanged(this.todos);
  }
}

class View {
  constructor() {
    this.app = this.getElement('#root');
    this.title = this.createElement('h1');
    this.title.textContent = 'Todos';
    this.form = this.createElement('form');
    this.input = this.createElement('input');
    this.input.type = 'text';
    this.input.placeholder = 'Add Todo';
    this.input.name = 'todo';

    this.submitButton = this.createElement('button');
    this.submitButton.textContent = 'Submit';

    this.todoList = this.createElement('ul', 'todo-list');
    this.form.append(this.input, this.submitButton);
    this.app.append(this.title, this.form, this.todoList);
  }

  bindAddTodo(handler) {
    this.form.addEventListener('submit', event => {
      event.preventDefault();

      if (this._todoText) {
        handler(this._todoText); // calls controllers handler with data from user input, passes it on to model
        this._resetInput();
      }
    });
  }

  bindDeleteTodo(handler) {
    this.todoList.addEventListener('click', event => {
      if (event.target.className === 'delete') {
        let id = parseInt(event.target.parentElement.id);
        handler(id); // todo element itself
      }
    });
  }

  bindToggleTodo(handler) {
    this.todoList.addEventListener('change', event => {
      if (event.target.type === 'checkbox') {
        let id = parseInt(event.target.parentElement.id);
        handler(id);
      }
    })
  }

  get _todoText() {   // gets value of input (todo text)
    return this.input.value;
  }

  _resetInput() {
    this.input.value = '';
  }

  createElement(tag, className) {
    let element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
  }

  getElement(selector) {
    let element = document.querySelector(selector);
    return element;
  }

  displayTodos(todos) {
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    if (todos.length === 0) {
      let p = this.createElement('p');
      p.textContent = 'Nothing to do! Add a task?';
      this.todoList.append(p);
    } else {
      todos.forEach(todo => {
        let li = this.createElement('li');
        li.id = todo.id;

        let checkbox = this.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.complete;

        let span = this.createElement('span');
        span.contentEditable = true;
        span.classList.add('editable');

        if (todo.complete) {
          let strike = this.createElement('s');
          strike.textContent = todo.text;
          span.append(strike);
        } else {
          span.textContent = todo.text;
        }

        let deleteButton = this.createElement('button', 'delete');
        deleteButton.textContent = 'Delete';
        li.append(checkbox, span, deleteButton);

        this.todoList.append(li);
      });
    }
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.onTodoListChanged(this.model.todos);  // call method once here to display initial todos
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);
    this.model.bindTodoListChanged(this.onTodoListChanged);
  }

  onTodoListChanged = todos => { // takes todos and displays them
    this.view.displayTodos(todos);
  }

  handleAddTodo = todoText => {
    this.model.addTodo(todoText);
  }

  handleEditTodo = (id, todoText) => {
    this.model.editTodo(id, todoText);
  }

  handleDeleteTodo = id => {
    this.model.deleteTodo(id);
  }

  handleToggleTodo = id => {
    this.model.toggleTodo(id);
  }  // using arrow functions here binds the context of 'this' to Controller
}

let app = new Controller(new Model(), new View());


// the view will listen for events because they're user input
// the view will then dispatch responsibility of handling events to the controller
// the controller will then call the model and give it the new data from the user
// the controller needs to know when to call the handlers
// create listeners and put them on DOM elements in the view
// call handlers in the controller, from the view within the bind functions
// binding the context of 'this' to the controller with arrow functions allow us to call these handlers from within the view bind functions without context loss

