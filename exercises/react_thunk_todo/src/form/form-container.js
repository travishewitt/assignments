import React from 'react';
import Form from './form.js';

import {connect} from 'react-redux';
import * as actionCreators from '../redux/actions/index.js'

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
    input = (e) => {
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
    submit = (e) => {
        console.log(this.state.inputs)
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
            <Form input = {this.input} submit = {this.submit} inputs = {this.state.inputs} clear = {this.clear}/>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators) (FormContainer)