# Write-Up for MVC Article as a review for JS239 Take Home Project
### Breakdown of concepts for better understanding
---

Objectives/Questions:
- understand role of model
- understand role of view
- understand role of controller
- how does the controller 'control' the model and view?
- how does the controller tell the view to update the data that the user sees?
- how does the controller tell the model to update the data that the user inputs?
- where are events handled after they fire?
- what class (model, view or controller) listens for events on the page elements?

## Model
---
- Understand role of the Model
- How does the controller tell the view to update the data that the user sees?

The Model class is where data is stored and manipulated. The model has methods that usually perform CRUD operations on the data itself. CRUD stands for CREATE, READ, UPDATE and DELETE. In Tania's article, we see that each of the CRUD methods (addTodo, editTodo, deleteTodo and toggleTodo) call `this.onTodoListChanged(this.todos)` after performing the operation on the `todos`. This calls the `onTodoListChanged` method with the context of the Controller. This means that when this method is invoked, we are actually invoking it from the Controller, which then calls the View to `displayTodos(todos)`, with the `todos` supplied from the View. This is how the Model contacts the Controller, gives it the newly modified data, after which the Controller contacts the View and gives it the data that it needs to display for the user. 

CRUD methods:
`addTodo(todoText)`
`editTodo(id)`
`deleteTodo(id)`
`toggleTodo(id)`
After each CRUD operation is finishing performing work on the data, Model passes the data to Controller's `onTodoListChanged` to tell the View to update the data the user sees. 

Binding Method:
`onTodoListChanged` - connects the Model and Controller by creating a property method on Model `onTodoListChanged(this.todos)` that calls the View with the context of Controller with the data from the Model.
Code: 

```js
// Controller Constructor()
this.model.bindTodoListChanged(this.onTodoListChanged);

// Controller method
onTodoListChanged = todos => { 
  this.view.displayTodos(todos);
}

// Model method
bindTodoListChanged(callback) {
  this.onTodoListChanged = callback;
} // now model has property method 'onTodoListChanged' that references the callback of the controller 'onTodoListChanged'
```

In the Controller's contructor method, we see this line:
`this.model.bindTodoListChanged(this.onTodoListChanged)`. We invoke the `bindTodoListChanged` method on `model` and pass in the method `onTodoListChanged` with `this` set to Controller. Since we define `onTodoListChanged` with an arrow function, `this` is now bound to Controller, preventing context loss when we pass this method into Model's method `bindTodoListChanged`. In method, we define `onTodoListChanged(callback)` as a property method on Model. `bindTodoListChanged` creates a method property on Model called `onTodoListChanged` that references the method we passed in to it, shown on line 26, `this.onTodoListChanged`. Remember, `this.onTodoListChanged` is called with the context of Controller, so everytime we call Model's `onTodoListChanged(this.todos)` method, we call it from Controller, which then calls the View to display the todos to the user. 

```js
bindTodoListChanged(callback) {
  this.onTodoListChanged = callback;
} 

// looks like:

bindTodoListChanged(this.onTodoListChanged) {
  this.onTodoListChanged = this.onTodoListChanged; // 'this' being Controller context
} 

// So when we call Model's `onTodoListChanged` method on Model and pass in todos, we can imagine we are calling it from Controller:

addTodo(todoText) {
    let todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
      text: todoText,
      complete: false,
    };

    this.todos.push(todo);
    this.onTodoListChanged(this.todos); 
    // Here, even though this method is Model's, we are connected to Controller since 'this' is the context.
  }
```
---

## View
---
- Understand role of View
- How does the controller tell the model to update the data that the user inputs?
- What handles events handled after they fire?
- What class (model, view or controller) listens for events on the page elements?

The View is responsible for the user interface. It dictates how the presentation looks to the user and handles getting and creating elements. Neither Model nor Controller deal with anything related to the View. The View takes in data that the Controller gives it and displays it to the user using HTML and CSS. If the user inputs or changes anything for the data in the application, the View takes that input, passes it to the Controller, after which the Controller passes it to the Model to handle the actual data. In Tania's article, she creates several methods to get/create elements manually without the aid of templates or frameworks. Once the Model is created with CRUD methods and the View is created with display methods, we can manually test the app in the Dev Console. 

The View listens for events on the elements. Once that event happens, it delegates responsibility of handling those events to the Controller. How does it do that? By binding the Controller's handler functions (the functions to handle specific actions on todos) to specific elements and events with the View's Binding methods listed below. Within those methods, we attach event listeners to specific DOM elements, for example, a `submit` event on the `form`, as shown below on line 114. When the submit event happens on the form, in other words, when the user adds a new todo and clicks the Add Todo button, this event fires and the work within the callback can execute. We prevent the default behavior of the submit event, pass in the new text to the `handler` method if there is any, and reset the input. The `handler` in this case is our Controller's handler function: 

```js
handleAddTodo = todoText => {
  this.model.addTodo(todoText);
}
```
Now, the Controller can call the Model which will then add the new todo to the `todos` array. Cool! For reference, within the Controller's Contructor() method, we see this line: `this.view.bindAddTodo(this.handleAddTodo)`. When we created the `app`, this automatically was called because of the constructor method. This is what passes the Controller's `handleAddTodo` handler to View's `bindAddTodo` method so when the submit event happens on the form, this handler can do its job of calling the Model. And this is how the View and Controller work together to give input to the Model!

Display methods:
`createElement(tag, className)`
`getElement(selector)`
`displayTodos(todos)`

Private Methods:
`get _todoText`
`_resetInput`

Binding methods:
`bindAddTodo(handler)`
`bindEditTodo(handler)`
`bindDeleteTodo(handler)`
`bindToggleTodo(handler)`
These binding methods pass in the Controller's handler methods with the context of Controller. 

```js
bindAddTodo(handler) {
  this.form.addEventListener('submit', event => {
     event.preventDefault();

    if (this._todoText) {
      handler(this._todoText); // calls controllers handler with data from user input, passes it on to model
      this._resetInput();
    }
  });
}
```

## Controller
- Understand role of Controller
- What handles events handled after they fire?

The Controller is basicall the middle man, the link, the connection between the Model and View. The Model and View know nothing about each other, and do not directly interact in any way. When the View has input, the View gives it to the Controller, so that the Controller can give it to the Model to do stuff with. On the flip side, when the Model has newly modified data, the Model gives it to the Controller, who then gives it to the View to display it to the user. All the Model has to do is store data, manipulate it, and call the Controller when needed with new data. All view has to do is display the webpage, listen for user input/events, and call the Controller or the Controller's handler when it has new data or events have happened. All the Controller has to do is play the balancing act of going back and forth between Model and View to give the user the interactive web application that they expect. 

Reference: All classes/methods collasped to cleary see structure of application, but left out constructors to see connections between all data (model), display (view) and connections (controller). 

```js
class Model {
  constructor() {
    this.todos = [
      { id: 1, text: 'Journal', complete: false },
      { id: 2, text: 'Read book', complete: false },
      { id: 3, text: 'Make coffee', complete: false },
    ];
  }

  bindTodoListChanged(callback) {
  }

  addTodo(todoText) {
  }

  editTodo(id, updatedText) {
  }

  deleteTodo(id) {
  }

  toggleTodo(id) {
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
  }

  bindDeleteTodo(handler) {
  }

  bindToggleTodo(handler) {
  }

  get _todoText() { 
  }

  _resetInput() {
  }

  createElement(tag, className) {
  }

  getElement(selector) {
  }

  displayTodos(todos) {
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.onTodoListChanged(this.model.todos); 
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);
    this.model.bindTodoListChanged(this.onTodoListChanged);
  }

  onTodoListChanged = todos => {
  }

  handleAddTodo = todoText => {
  }

  handleEditTodo = (id, todoText) => {
  }

  handleDeleteTodo = id => {
  }

  handleToggleTodo = id => {
  }
}

let app = new Controller(new Model(), new View());
```