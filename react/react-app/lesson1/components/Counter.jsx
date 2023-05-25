import { Component } from "react";
import { ActionButton } from "./ActionButton";

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            likes: 0,
            userData: {
                username: 'ivan',
                age: 23
            }
        }
    }

    increase = () => {
        this.setState({ likes: this.state.likes + 1 })
        // this.state.likes++;
    }

    decrease = () => {
        this.setState({ likes: this.state.likes - 1 })
    }

    render() {
        return (
            <>
                <div className="counter">
                    <h1>Counter: <span>{this.state.likes}</span></h1>
                    {/* <button onClick={this.increase}>Increase</button>
                    <button onClick={this.decrease}>Decrease</button> */}
                    <ActionButton action={this.increase} title='Increase' />
                    <ActionButton action={this.decrease} title='Decrease' />
                    <div>
                        {this.state.userData.username}
                    </div>
                </div>
                <div>
                    <form action=""></form>
                </div>
            </>
        )
    }
}

export default Counter;
