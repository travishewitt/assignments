import React from 'react';
import Form from './form.js';

import * as actionCreators from '../redux/action-creators/index.js';
import { connect } from 'react-redux';



class FormContainer extends React.Component {
    constructor () {
        super();
        this.state = {
            inputs: {
                imgUrl: "",
                topText: "",
                botText: ""
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
    clear = () => {
        this.setState({
            inputs: {
                imgUrl: "",
                topText: "",
                botText: ""
            }
        })
    }
    create = (e) => {
        e.preventDefault();
        this.props.addMeme(this.state.inputs);
    }
    render() {
        return <Form input = {this.input} create = {this.create} values = {this.state.inputs}/>
    }
}


const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps, actionCreators) (FormContainer)