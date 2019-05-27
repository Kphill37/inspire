export default class List {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }
  get listTemplate() {
    return `<li>${this.description} <input type="checkbox" name="completed"${this.completed ? "checked" : ""} onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')"> <button onclick="app.controllers.todoController.removeTodo('${this._id}')">DELETE</button></li>`
  }
}