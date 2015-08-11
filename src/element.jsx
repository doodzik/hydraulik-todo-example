import React, { Component }  from "react"

class TodoCheckbox extends Component {
  render() {
    return (
    )
  }
}

class TodoName extends Component {
  render() {
    return (
    )
  }
}

class Todo extends Component {
  render() {
    return (
      <div>
        <TodoCheckbox checked={this.params.tode.checked}/>
        <TodoName todo_id={this.params.todo.id} name={this.params.todo.name}/>
      </div>
    )
  }
}


