

const Todo = (props) => {
    const { title, progress } = props;

    return (
        <li>
            {title}: {progress}%
            <button>X</button>    
        </li>
    )
}

// class Todo extends Component {
//     constructor(props) {
//         super(props);
        
//         this.state = {}
//     }

//     render() {
//         return (
//             <li>
//                 {this.props.title}: {this.props.progress}%
//                 <button>X</button>    
//             </li>
//         )
//     }
// }

export default Todo;
