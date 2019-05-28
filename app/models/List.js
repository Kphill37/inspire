export default class List {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }
  get listTemplate() {
    return `<div class="row"><li>${this.description} <input type="checkbox" name="completed"${this.completed ? "checked" : ""} onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')"> <button type="button" class="btn btn-danger" onclick="app.controllers.todoController.removeTodo('${this._id}')">DELETE</button></li></div>`
  }
}