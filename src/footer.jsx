class Link extends Component {
  onClick(){
    Nav.update({ view: this.params.to })
  }

  render() {
    return <div onClick={this.onClick}>{this.params.to}</div>
  }
}

class TodoFooter extends Component {
  render() {
    return (
      <div>
        <div>{this.params.todos.lenght}<div>
        <Link to='all' />
        <Link to='active' />
        <Link to='completed' />
      </div>
    )
  }
}

