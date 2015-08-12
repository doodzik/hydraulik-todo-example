import React,  { Component } from "react"
import { nav } from '../sets/klass'

class Link extends Component {
  onClick = () => {
    var view = this.props.to
    nav.update({}, { view })
  }

  render() {
    if(this.props.active && this.props.to === this.props.active)
      return <div className="active" onClick={this.onClick}>{this.props.to}</div>
    return <div onClick={this.onClick}>{this.props.to}</div>
  }
}

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div>{this.props.todosCount}</div>
        <Link to='all' active={this.props.view}/>
        <Link to='active' active={this.props.view}/>
        <Link to='completed' active={this.props.view}/>
      </div>
    )
  }
}

