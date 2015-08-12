import React,  { Component } from "react"
import { nav, active, completed } from '../sets/klass'

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

export default active.Component(class {
  render() {
    const active = this.props.active || [],
          todos  = active.length || 0
    return (
      <div>
        <div>{todos}</div>
        <Link to='all' active={this.props.view}/>
        <Link to='active' active={this.props.view}/>
        <Link to='completed' active={this.props.view}/>
      </div>
    )
  }
})

