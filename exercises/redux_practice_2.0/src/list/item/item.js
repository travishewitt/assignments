import React from 'react';

class Item extends React.Component {
    render () {
        return (
            <div>
                <div>
                    <h1>{this.props.item.title}</h1>
                    <h3>{this.props.item.description}</h3>
                    <button onClick = {() => {this.props.delete(this.props.index)}}>X</button>
                    <button onClick = {this.props.handleToggle}>Edit</button>
                </div>
                <div className={this.props.isToggled ? "show" : "hide"}>
                    <form onSubmit = {this.props.handleSave}>
                        <input name="title" type="text" placeholder = "title" onInput = {this.props.handleInput} value = {this.props.inputs.title}/>
                        <input name="description" type="text" placeholder = "description" onInput = {this.props.handleInput} value = {this.props.inputs.description}/>
                        <button>Done</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Item