## Model

### Get all todos
method: GET
path: http://localhost:3000/api/todos
return value: json array of all todos
status: 200 OK
[
  {'id': '1', 'title': 'todo1', 'day': '11', 'month': '11',
    'year': '2017', 'completed': 'true', 'description': 'Some Description'},
  {'id': '2', 'title': 'todo2', 'day': '', 'month': '',
    'year': '', 'completed': 'false', 'description': ''}
]
Approach:
- create getAllTodos() method async
- return the todos

### Get a single todo with id
method: GET
path: http://localhost:3000/api/todos/4
return value: json object of one todo
status: 200 OK
{'id': '1', 'title': 'todo 1', 'day': '11', 'month': '11', 'year': '2017', 'completed': 'true', 'description': 'sample todo'}
on error status: 404 Not Found
'The todo could not be found.'
Approach:
- create getSingleTodo() method async
- return the todo

### Add a todo
method: POST
path: http://localhost:3000/api/todos
status: 201
return value: json object with id attribute and empty strings for all values left blank
required values: title
with all values:
{'title': 'todo 1', 'day': '11', 'month': '11', 'year': '2017', 'completed': 'true', 'description': 'sample todo'}
without all values:
{'title': 'todo 1', 'description': 'sample todo'}
on error status: 400 Bad Request
'Todo cannot be saved.'
Approach:
- make post request to /api/todos
- set headers to json
- stringify the todo body (json object)
- alert if the response is not okay

### Update/edit a todo
method: PUT
path: http://localhost:3000/api/todos/4
status: 200
return value: json object with updated todo
{'title': 'todo 1', 'description': 'updated sample todo'}
on error status: 400 Invalid Input - when todo cannot be saved due to incorrect attributes or when the todo doesn't exist
'Todo cannot be saved.'
on error status: 404 No Todo - when todo with id cannot be found
'The todo could not be found.'
Approach:
- make put request to /api/todos/id
- get the current todo id from this.currentTodo
- get the single todo from model.getSingleTodo
- get form data from edit todo form
- set headers to json
- stringify the todo body (json object)
- pass id and todo body to model.updateTodo
- alert if the response is not okay

### Delete a todo
method: DELETE
path: http://localhost:3000/api/todos/4
status: 204 No Content
on error status: 404 Not Found - when todo with id cannot be found
Approach:
- make DELETE request to path with id
- if response is not okay, alert the text 

// when user clicks on 'all todos', display All Todos
// when user clicks on 'completed', show 