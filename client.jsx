import React,  { Component } from "react"
import { nav } from './sets/klass'
// import Footer from './src/footer.jsx'

var App = nav.Component(class {
  render() {
    return (
      <div>
        Hello World
      </div>
    )
  }
})
// <Footer view={this.props.nav.view}/>
// <TodoHeader />
// <TodoListFactory type={this.props.nav.view} show_list={this.params.nav.show_list}/>

React.render(<App />, document.getElementById('content'))
