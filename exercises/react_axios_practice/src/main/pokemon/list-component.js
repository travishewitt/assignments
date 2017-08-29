import React, { Component } from 'react';
import ItemContainer from '../item/item-container.js'

class ListComponent extends Component {
    genTodo() {
        return this.props.todoList.map((item,index)=>{
            return <ItemContainer delete = {this.props.delete} key = {index} todo = {item}/>
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.genTodo()}
                </div>
            </div>
        );
    }
}

export default ListComponent;