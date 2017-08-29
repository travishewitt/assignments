import React, { Component } from 'react';

class ItemComponent extends Component {
    render() {
        return (
            <div className="col-sm-3">
            <div>
                <h3 className="text-center pokemonItem">{this.props.todo.title}</h3>
                <h6>Description: {this.props.todo.description}</h6>
                <h6>Price: ${this.props.todo.price}</h6>
                <h6>{this.props.todo._id}</h6>
                <button onClick = {() => {this.props.delete(this.props.todo._id)}}>Complete this item!</button>
                </div>
                <div>
                <button onClick = {this.props.handleToggle}>Edit</button>
                </div>
                <div className = {this.props.toggled ? "show" : "hide"}>
                <form className="itemWrapper">
                    <input name="title"value={this.props.inputs.title} type="text" placeholder="Edit Title" onChange = {this.props.handleInput}/>
                    <input name="description"value={this.props.inputs.description} type="text" placeholder="Edit Description" onChange = {this.props.handleInput}/>
                    <input name="price"value={this.props.inputs.price} type="text" placeholder="Edit Price" onChange = {this.props.handleInput} />
                    <button>Done</button>
                </form>
                </div> 
            </div>
        );
    }
}

export default ItemComponent;