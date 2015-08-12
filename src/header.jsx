import React,  { Component } from "react"
import { nav } from '../sets/klass'
// import { nav } from '../sets/klass'

class VisibilitySwicher extends Component {
  show = () => {
    nav.update({}, { show_list: true })
  }

  hide = () => {
    nav.update({}, { show_list: false })
  }

  switcher = () => {
    var show_list = this.props.show_list
    if(show_list === null || show_list === undefined || show_list === true)
      nav.update({}, { show_list: false })
    else
      nav.update({}, { show_list: true })
  }

  render() {
    var show_list = this.props.show_list
    if(show_list === null || show_list === undefined || show_list === true)
      return <div onClick={this.switcher}>hide todos</div>
    else
      return <div onClick={this.switcher}>show todos</div>
    // if(show_list === null || show_list === undefined || show_list === true)
    //   return <div onClick={this.hide}>hide todos</div>
    // else
    //   return <div onClick={this.show}>show todos</div>
  }
}

class Input extends Component {
  createTodo = (input) => {
    // todo.create(input.value)
    input.value = ''
  }

  pressEnter = (e) => {
    e.persist()
    if(e.keyCode == 13)
      this.createTodo(e.target)
  }

  render() {
    return <input type='text' onKeyDown={this.pressEnter}/>
  }
}

export default class Header extends Component {
  render() {
    return (
      <div>
        <VisibilitySwicher {...this.props} />
        <Input />
      </div>
    )
  }
}

