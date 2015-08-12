import React,  { Component } from "react"
import { nav } from './sets/klass'
import Footer  from './src/footer.jsx'
import Header  from './src/header.jsx'
import Content from './src/content.jsx'

var App = nav.Component(class {
  render() {
    var nav       = this.props.nav || {},
        view      = nav.view || 'all',
        show_list = (nav.show_list || nav.show_list === undefined || nav.show_list === null) ? true : false
    return (
      <div>
        <Header show_list={show_list}/>
        <Content view={view} show_list={show_list}/>
        <Footer todosCount={0} view={view}/>
      </div>
    )
  }
})

React.render(<App />, document.getElementById('content'))
