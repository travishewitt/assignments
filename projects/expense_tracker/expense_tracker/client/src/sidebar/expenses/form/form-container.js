import React from 'react';
import Form from './form.js';
import * as actionCreators from '../../../redux/actions/index.js';
import { connect } from 'react-redux';

class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            expense: {
                description: "",
                cost: "",
                category: ""
            }
        }
    }
    clear = () => {
        this.setState({
            expense: {
                description: "",
                cost: "",
                category: ""
            }
        })
    }
    submit = (e) => {
        e.preventDefault();
        this.props.addExpense({
            ...this.state.expense,
            category: e.target.name
        });
        this.clear();
    }
    input = (e) => {
        e.persist();
        this.setState((prevState) => {
            return {
                expense: {
                    ...prevState.expense,
                    [e.target.name]: e.target.value
                }
            }
        }
        )
    }
    render() {
        return (
            <Form input={this.input} submit={this.submit} expense={this.state.expense}/>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators)(FormContainer)