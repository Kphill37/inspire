import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	let template = ''
	let todos = _todoService.Todos
	todos.forEach(todos => {
		template += todos.listTemplate
	})
	document.getElementById("todos").innerHTML = template
	_drawForm()
}

function _drawForm() {
	document.getElementById("add-todos").innerHTML = `<form onsubmit="app.controllers.todoController.addTodo(event)">
	 <span>${_todoService.Todos.length} Item</span><br />
		<div class="row"><div class="col-6"><input size="20" type="text" name="description" placeholder="Add Task"></div> <button type="submit" class="btn btn-primary">
		ADD</button></div>
	</form>`
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()
	}

	addTodo(event) {
		event.preventDefault()
		var form = event.target
		var todo = {
			description: form.description.value
		}
		_todoService.addTodo(todo)
	}

	toggleTodoStatus(todoId) {
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		_todoService.removeTodo(todoId)
		_todoService.getTodos()
	}
}
