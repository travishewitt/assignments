import React from 'react';
import Item from './item.js';

import * as actionCreators from '../../redux/actions/index.js';
import { connect } from 'react-redux';


class ItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggled: false,
            inputs: {
                title: props.item.title,
                description: props.item.description
            }
        }
    }
    handleToggle = () => {
        this.setState((prevState) => {
            return {isToggled: !prevState.isToggled}    
        })
    }
    handleInput = (e) => {
        e.persist();
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
    handleSave = (e) => {
        e.preventDefault();
        this.props.editItem(this.state.inputs, this.props.index)
    }
    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <Item inputs = {this.state.inputs} item = {this.props.item} handleSave = {this.handleSave} delete = {this.props.deleteItem} index = {this.props.index} handleInput = {this.handleInput} handleToggle = {this.handleToggle} isToggled = {this.state.isToggled}/>
        )
    }
}


const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps, actionCreators)(ItemContainer)