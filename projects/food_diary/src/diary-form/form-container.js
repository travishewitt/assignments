import React from 'react'
import Form from './form.js';

import * as actionCreators from '../redux/actions/index.js';
import { connect } from 'react-redux';

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                food: "",
                quantity: "",
                kcals: "",
                protein: ""
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
        e.preventDefault();
        this.props.addMeal(this.state.inputs);
        this.clear();
    }
    clear = () => {
        this.setState({
            inputs: {
                food: "",
                quantity: "",
                kcals: "",
                protein: ""
            }
        })
    }
    render() {
        return(
            <Form submit = {this.submit} input = {this.input} meal = {this.state.inputs}/>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators)(FormContainer)