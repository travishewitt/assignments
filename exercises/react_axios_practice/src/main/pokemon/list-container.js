import React, { Component } from 'react';
import ListComponent from './list-component.js';


class ListContainer extends Component {
    componentWillMount() {
        this.props.loadData();
    }
    render() {
        return (
            <ListComponent todoList = {this.props.todoList} delete = {this.props.delete}/>
        );
    }
}

export default ListContainer;