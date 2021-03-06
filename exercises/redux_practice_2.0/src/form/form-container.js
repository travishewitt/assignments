import React from 'react';
import Form from './form.js';

import * as actionCreators from '../redux/actions/index.js';
import { connect } from 'react-redux';

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                title: "",
                description: ""
            }
            
        }
    }
    handleInput = (e) => {
        e.persist()
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })   
        console.log(this.state)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.inputs);
        this.clear();
    }
    clear = () => {
        this.setState({
            inputs: {
                title: "",
                description: ""
            }
        })
    }
    render() {
        return (
            <Form handleSubmit = {this.handleSubmit} handleInput = {this.handleInput} inputs = {this.state.inputs}/>
        )
    }
}



const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators)(FormContainer)