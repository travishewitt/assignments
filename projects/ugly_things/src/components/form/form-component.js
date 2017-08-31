import React from 'react';

class FormComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="formWrapper">
                    <form onSubmit = {this.props.submit}>
                        <input value={this.props.inputValues.title} type="text" placeholder="Title" name="title" onChange = {this.props.input} />
                        <input value={this.props.inputValues.description} type="text" placeholder="Description" name="description" onChange = {this.props.input} />
                        <input value={this.props.inputValues.imgUrl} type="text" placeholder="Image URL" name="imgUrl" onChange = {this.props.input} />
                        <button>Create</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default FormComponent