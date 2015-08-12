import React,  { Component } from "react"
import { nav } from './sets/klass'
import Footer from './src/footer.jsx'
import Header from './src/header.jsx'

var App = nav.Component(class {
  render() {
    console.log(this.props.nav)
    var nav = this.props.nav || {}
    var view = nav.view || 'all'
    return (
      <div>
        <Header show_list={nav.show_list}/>
        <Footer todosCount={0} view={view}/>
      </div>
    )
  }
})
// <TodoListFactory type={this.props.nav.view} show_list={this.params.nav.show_list}/>

React.render(<App />, document.getElementById('content'))
