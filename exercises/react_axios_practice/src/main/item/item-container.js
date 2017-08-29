import React, { Component } from 'react';
import ItemComponent from './item-component.js'


class ItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
            inputs: {
                title: props.todo.title,
                description: props.todo.description,
                price: props.todo.price
                }
            }
        }
    handleToggle = () => {
        this.setState((prevState)=>{
            return {
                toggled: !prevState.toggled
            }
        })
    }
    handleInput = (e) => {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })   
    }
    render() {
        return (
            <ItemComponent 
                delete = {this.props.delete} 
                todo = {this.props.todo} 
                handleToggle = {this.handleToggle} 
                toggled = {this.state.toggled} 
                inputs = {this.state.inputs} 
                handleInput = {this.handleInput}
                />
        );
    }
}

export default ItemContainer;