import React,  { Component }        from "react"
import Todo                         from './element.jsx'
import { todos, active, completed } from '../sets/klass'

class TodoList extends Component {
  render() {
    var todos = this.props.todos || []
    return (<ul>
              {todos.map(function(todo, index){
                return <li key={index}><Todo todo={todo} /></li>;
              })}
            </ul>)
  }
}

var Todos = todos.Component(class {
  render(){
    return <TodoList todos={this.props.todos} />
  }
})

var TodosActive = active.Component(class {
  render(){
    return <TodoList todos={this.props.active} />
  }
})

var TodosCompleted = completed.Component(class {
  render(){
    return <TodoList todos={this.props.completed} />
  }
})

export default class Content extends Component {
  render(){
    var Todo = Todos;
    if(this.props.view === 'active')
      Todo = TodosActive
    else if(this.props.view === 'completed')
      Todo = TodosCompleted
    if(this.props.show_list)
      return <Todo />
    return <div></div>
  }
}
