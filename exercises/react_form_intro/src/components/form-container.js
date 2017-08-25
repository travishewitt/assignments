import React from 'react';
import FormComponent from './form-component.js'

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            firstname: "",
            lastname: ""
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }
    clear = () => {
        this.setState({
            username: "",
            password: ""
        })
    }
    submit = () => {
        alert(`Congratulations, ${this.state.firstname}, your information has been forwarded to Russia. Again. They have everyones info already, but just to make sure, they need duplicates.`)
        this.clear();
    }
    render() {
        return (
            <FormComponent handleInput = {this.handleInput} submit = {this.submit} {...this.state}/>
        )
    }
}

export default FormContainer