import React from 'react';
import ItemComponent from './item-component.js'

import {connect} from 'react-redux';
import * as actionCreators from '../../redux/actions/index.js';


class ItemContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            isToggledOn: false,
            inputs: {
                title: "",
                description: ""
            }
        }
    }
    handleToggle = () => {
        this.setState((prevState) => {
            return {isToggledOn: !prevState.isToggledOn}
        })
        console.log(this.state.isToggledOn)
    }
    input = (e) => {
        e.persist();
        this.setState((prevState) => {
            return {
                ...prevState,
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
        console.log(this.state.inputs)
    }
    submit = (e) => {
        e.preventDefault();
        this.props.editItem(this.props.id, this.state.inputs)
    }

    render() {
        return (
            <ItemComponent item = {this.props.item} id = {this.props.id} handleToggle = {this.handleToggle} isToggledOn = {this.state.isToggledOn} submit = {this.submit} input = {this.input} inputs = {this.state.inputs}/>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators)(ItemContainer)