import React, { Component } from 'react';
import CounterComponent from './counter-component.js';

class CounterContainer extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.handleUp = this.handleUp.bind(this)
        this.handleDown = this.handleDown.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }
    handleUp() {
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            }
        })
    }
    handleDown() {
        this.setState((prevState)=>{
            return {
                count: prevState.count -1
            }
        })
    }
    handleClear() {
        this.setState({
            count: 0
        })
    }
    render() {
        return (
            <div>
                <CounterComponent count={this.state.count} handleUp = {this.handleUp} handleDown = {this.handleDown} handleClear = {this.handleClear}/>
            </div>
        );
    }
}

export default CounterContainer;