import React from 'react';

class Counter extends React.Component {
    render() {
        return (
            <div className = "counterWrapper">
                <h3>{this.props.counter}</h3>
                <button onClick = {() => {this.props.up(1)}}>+</button>
                <button onClick = {() => {this.props.up(-1)}}>-</button>
                <br />
                <button onClick = {() => {this.props.up(5)}}>+5</button>
                <button onClick = {() => {this.props.up(-5)}}>-5</button>
                <br />
                <button onClick = {() => {this.props.double(2)}}>Double</button>
                <button onClick = {() => {this.props.double(.5)}}>Half</button>
                <br />
                <button onClick = {this.props.clear}>Reset</button>
            </div>
        )
    }
}

export default Counter