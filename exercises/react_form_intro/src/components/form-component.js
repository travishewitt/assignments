import React from 'react';

class FormComponent extends React.Component {
    render() {
        return (
        <div className = "form">
            <form onSubmit={this.props.submit}>
                <input value = {this.props.email}name= "email"type="email" placeholder="Email" onInput={this.props.handleInput}/>
                <input value = {this.props.firstname}name= "firstname"type="text" placeholder="First Name" onInput={this.props.handleInput} />
                <input value = {this.props.lastname}name= "lastname"type="text" placeholder="Last Name" onInput={this.props.handleInput} />
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

export default FormComponent;