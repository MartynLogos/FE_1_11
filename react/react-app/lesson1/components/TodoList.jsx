import Todo from "./Todo";


const TodoList = (props) => {
    return (
        <ul>
            {props.todos.map(todo => {
                return <Todo title={todo.title} progress={todo.process} />
            })}
        </ul>
    )
}

// class TodoList extends Component {

//     render() {
//         return (
//             <ul>
//                 {this.props.todos.map(todo => {
//                     return <Todo title={todo.title} progress={todo.process} />
//                 })}
//             </ul>
//         )
//     }
// }

export default TodoList;
