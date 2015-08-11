class TodoVisibilitySwicher extends Component {
  render() {
    return (
      <div></div>
    )
  }
}

class TodoInput extends Component {
  create(){
    // create element in store
    // clear input
  }

  componentDidMount() {
    this.refs.input.on('keydown', e => {
      if(e.keycode === 'bla')
        this.create()
    }
  }

  render() {
    return <input ref='input'/>
  }
}

class TodoHeader extends Component {
  render() {
    return (
      <div>
        <TodoVisibilitySwicher />
        <TodoInput />
      </div>
    )
  }
}

