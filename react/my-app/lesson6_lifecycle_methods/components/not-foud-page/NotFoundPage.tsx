import { Component } from "react";


type MyState = {
    counter: number; // like this
};

class NotFoundPage extends Component {
    constructor(props?: any) {
        super(props);

        console.log('initialization');

    }
    state: MyState = {
        counter: 0
    };

    // componentWillMount() {
    //     setTimeout(() => {
    //         console.log('WILL mount');
    //     }, 1000)
    // }

    // componentDidMount() {
    //     setTimeout(() => {
    //         console.log('DID mount');
    //     }, 3000)
    // }

    componentWillUpdate() {
        console.log('WILL update, counter = ', this.state.counter);
    }

    componentDidUpdate() {
        console.log('DID update, counter = ', this.state.counter);
    }

    componentWillUnmount() {
        console.log('Unmounting...');
    }

    render() {
        // setTimeout(() => {
        // }, 2000)
        console.log('RENDER');

        return (
            <div>
                <h1>Result: <span>{this.state.counter}</span></h1>
                <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
                    Plus
                </button>
            </div>
        )
    }
};

export default NotFoundPage;

// const NotFoundPage = () => {
//     return <div>
//         This Page does not Exist !

//     </div>
// }