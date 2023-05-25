import { Component, useState } from "react";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import TodoForm from "./TodoForm";

// class App extends Component {
const App = () => {
  const todoList = [
    { title: 'React HW', process: 50 },
    { title: 'DOM HW', process: 90 },
    { title: 'SCSS HW', process: 100 },
    { title: 'Storages HW', process: 0 },
  ]

  const [todos, setTodos] = useState(todoList);

  return (
    <div className="App" >
      <TodoList todos={todos} />
      <TodoForm />
    </div>
  );
}

// render() {
//   return (
//     <div className="App">
//       {/* <Counter /> */}
//         {/* <li>{this.state.todos[0].title}: {this.state.todos[0].process}%</li>
//         <li>
//        {this.state.todos[1].title}: {this.state.todos[1].process}%
//        <button>X</button>
//        </li>
//         <li>{this.state.todos[2].title}: {this.state.todos[2].process}%</li>
//         <li>{this.state.todos[3].title}: {this.state.todos[3].process}%</li> */}
//       </ul>
//     </div>
//   );
// }
// }

// function App() {
//   return (
//     <div className="App">
//       <Counter />

//     </div>
//   );
// }

export default App;
