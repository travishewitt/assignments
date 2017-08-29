import React from 'react';

class FormComponent extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit = {this.props.handleSubmit}>
                    <input value={this.props.title} name="title" type="text" placeholder="title" onInput={this.props.handleInput}/>
                    <input value={this.props.description} name="description" type="text" placeholder="description" onInput={this.props.handleInput}/>
                    <input value={this.props.price} name="price" type="text" placeholder="price" onInput={this.props.handleInput}/>
                    <button >Add To Do</button>
                </form>
            </div>
        )
    }
}

export default FormComponent;