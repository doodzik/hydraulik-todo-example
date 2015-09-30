import React, { Component }  from "react"
import { todos }             from '../sets/klass'

class Checkbox extends Component {
  // update = (e) => {
  //   var hi = e.value
  //   console.log(hi)
  //   // todos.destroy({ title: this.props.title })
  // }

  update(e) {
    // var hi = e.value
    console.log('hi')
    // todos.destroy({ title: this.props.title })
  }

  render() {
    return <input type="checkbox" onChange={this.update} checked={this.props.checked} />
  }
}

class Remove extends Component {
  remove = () => {
    console.log('hi')
    // todos.destroy({ title: this.props.title })
  }

  render() {
    return (
      <div onClick={this.remove}>x</div>
    )
  }
}

class Title extends Component {
  render() {
    return (
      <div>{this.props.title}</div>
    )
  }
}

export default class Todo extends Component {
  render() {
          // todo_id={this.props.todo.id}
    return (
      <div>
        <Checkbox
          checked={this.props.todo.checked}/>
        <Title
          title={this.props.todo.title}/>
        <Remove
          title={this.props.todo.title}/>
      </div>
    )
  }
}

