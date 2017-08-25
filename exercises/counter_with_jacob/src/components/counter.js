import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }
    up = () => {
        this.setState((prevState) => ({counter: prevState.counter + 1}));
    }
    down = () => {
        this.setState((prevState) => ({counter: prevState.counter - 1}));
    }
    render() {
        return (
            <div className = "counter">
                <h1>{this.props.title}</h1>
                <h1>{this.state.counter}</h1>
                <button onClick={this.up}>Up</button>
                <button onClick={this.down}>Down</button>
            </div>
        )
    }
}

export default Counter;