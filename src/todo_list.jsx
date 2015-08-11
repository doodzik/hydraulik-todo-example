class List extends Component {
  render(){
    let Element   = this.children[0]
    let List = this.props.list.map((element, index) => {
      return (
        <li key={index}>
            <Element {{`${this.props.first}`: element}} />
        </li>
      )
    })
    return (
      <ul>
        <List />
      </ul>
    )
  }
}

class TodoList extends Component {
  render() {
    return (
      <List todo={this.props.todos}>
        <Todo />
      </List>
    )
  }
}

var Todos          = TodoHyda(TodoList)
var TodosActive    = TodoHyda(TodoList)
var TodosCompleted = TodoHyda(TodoList)

class TodoListFactory extends Component {
  render(){
    let Todo = Todos;
    if(this.params.type === 'active')
      Todo = TodosActive
    else if(this.params.type === 'completed')
      Todo = TodosCompleted
    return <Todo />
  }
}

