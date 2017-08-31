import React from 'react';
import FormComponent from './form-component.js';

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            imgUrl: ""
        }
    }
    input = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }
    clear = () => {
        this.setState({
            title: "", 
            description: "",
            imgUrl: ""
        })
    }
    submit = (e) => {
        e.preventDefault();
        this.props.post(this.state);
        this.clear();
    }
    render() {
        return (
            <FormComponent input = {this.input} submit = {this.submit} inputValues = {this.state}/>
        )
    }
}

export default FormContainer