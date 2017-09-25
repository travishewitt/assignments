import React from 'react';
import FormComponent from './form-component.js';

import {connect} from 'react-redux';
import * as actionCreators from '../redux/actions/index.js';

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                firstName: "",
                lastName: "",
                bountyAmount: "",
                isAlive: ""
            }
        }
    }
    submit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.inputs);
        this.clear();
    }
    clear = () => {
        this.setState({
            inputs: {
                firstName: "",
                lastName: "",
                bountyAmount: "", 
                isAlive: ""
            }
        })
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
    render() {
        return (
            <FormComponent input = {this.input} submit = {this.submit} inputs = {this.state.inputs}/>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect (mapStateToProps, actionCreators) (FormContainer)