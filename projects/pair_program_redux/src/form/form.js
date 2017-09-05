import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div className="formWrapper">
                <form onSubmit = {this.props.create}>
                    <input name="imgUrl" value = {this.props.values.imgUrl} type="text" placeholder="Image URL" onInput = {this.props.input}/>
                    <input name="topText" value = {this.props.values.topText} type="text" placeholder="Top Text" onInput = {this.props.input}/>
                    <input name="botText" value = {this.props.values.botText} type="text" placeholder="Bottom Text" onInput = {this.props.input}/>
                    <button className = "btn btn-success">Create</button>
                </form>
            </div>
        )
    }
}

export default Form