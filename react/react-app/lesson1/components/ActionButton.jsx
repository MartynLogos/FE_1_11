import { Component } from "react";

class ActionButton extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return <button onClick={this.props.action}>{this.props.title}</button>
    }
}

export { ActionButton };
