import React from 'react';
import ItemComponent from './item-component.js';

import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actions/index.js';

class ItemContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            isToggledOn: false,
            inputs: {
                firstName: "",
                lastName: "", 
                bountyAmount: "", 
                isAlive: ""
            }
        }
    }
    handleToggle = () => {
        this.setState((prevState) => {
            return {isToggledOn: !prevState.isToggledOn}
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
    submit = (e) => {
        e.preventDefault();
        this.props.editItem(this.props.id, this.state.inputs)
        this.handleToggle()
    }
    render() {
        return(
            <ItemComponent 
                bounty = {this.props.bounty} 
                id = {this.props.id} 
                handleToggle = {this.handleToggle}
                isToggledOn = {this.state.isToggledOn}
                submit = {this.submit}
                input = {this.input}
                inputs = {this.state.inputs}
                />
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators) (ItemContainer)