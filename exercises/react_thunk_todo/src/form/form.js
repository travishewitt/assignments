import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit = {this.props.submit}>
                    <input name="title" type="text" placeholder="Title" onInput = {this.props.input} value = {this.props.inputs.title}/>
                    <input name="description" type="text" placeholder="Description" onInput = {this.props.input} value = {this.props.inputs.description}/>
                    <button>+</button>
                </form>
            </div>
        )
    }
}

export default Form;