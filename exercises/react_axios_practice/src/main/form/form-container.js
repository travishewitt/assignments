import React, { Component } from 'react';
import FormComponent from './form-component.js'


class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            price: ""
        }
    }
    handleInput = (e) => {
        this.setState(
           {[e.target.name]: e.target.value}
        )        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.postData(this.state);
        this.clearInputs();
    }
    clearInputs = () => {
        this.setState({
            title: "",
            description: "",
            price: ""
        })
    }
    render() {
        return (
           <FormComponent handleInput = {this.handleInput} handleSubmit = {this.handleSubmit} />
        );
    }
}

export default FormContainer;