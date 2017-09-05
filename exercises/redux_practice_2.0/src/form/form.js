import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div className = "formWrapper">
                <form onSubmit = {this.props.handleSubmit}>
                    <input value = {this.props.inputs.title} onInput = {this.props.handleInput} name="title" type="text" placeholder="title" />
                    <input value = {this.props.inputs.description} onInput = {this.props.handleInput} name="description"type="text" placeholder="description" />
                    <button type="submit">+</button>
                </form>
            </div>
        )
    }
}

export default Form;