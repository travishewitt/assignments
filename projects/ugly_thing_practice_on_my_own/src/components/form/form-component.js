import React from 'react';

class FormComponent extends React.Component {
    render() {
        return(
            <div className = "formWrapper">
                <form onSubmit = {this.props.submit}>
                    <input value = {this.props.containerState.title} name= "title" type="text" placeholder="Title" onInput = {this.props.input}/>
                    <input value = {this.props.containerState.description} name= "description" type="text" placeholder="Description" onInput = {this.props.input}/>
                    <input value = {this.props.containerState.imgUrl} name= "imgUrl" type="text" placeholder="Image Url" onInput = {this.props.input}/>
                    <button>Create</button>
                </form>
            </div>
        )
    }
}

export default FormComponent