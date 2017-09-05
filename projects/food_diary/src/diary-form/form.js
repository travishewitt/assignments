import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div className = "formWrapper">
                <form onSubmit = {this.props.submit}>
                    <input className = "formInputs" type="text" placeholder = "food" onInput = {this.props.input} />
                    <input className = "formInputs" type="text" placeholder = "quantity" onInput = {this.props.input} />
                    <input className = "formInputs" type="text" placeholder = "kcals" onInput = {this.props.input} />
                    <input className = "formInputs" type="text" placeholder = "protein" onInput = {this.props.input}/>
                    <button className = "formButton">Log</button>
                </form>
            </div>
        )
    }
}

export default Form