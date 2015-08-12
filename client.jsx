import React,  { Component } from "react"
import { nav } from './sets/klass'
import Footer from './src/footer.jsx'

var App = nav.Component(class {
  render() {
    console.log(this.props)
    var nav = this.props.nav || {}
    var view = nav.view || 'all'
        // <TodoHeader />
    return (
      <div>
        <Footer todosCount={0} view={view}/>
      </div>
    )
  }
})
// <TodoListFactory type={this.props.nav.view} show_list={this.params.nav.show_list}/>

React.render(<App />, document.getElementById('content'))
