import React from 'react';

class FormComponent extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit = {this.props.submit} >
                    <input type="text" placeholder="First Name" onInput = {this.props.input} value={this.props.inputs.firstName} name="firstName"/>
                    <input type="text" placeholder="Last Name" onInput = {this.props.input} value={this.props.inputs.lastName} name="lastName"/> 
                    <input type="text" placeholder="Bounty Amount" onInput = {this.props.input} value={this.props.inputs.bountyAmount} name="bountyAmount"/>
                    <input type="text" placeholder="Living status" onInput = {this.props.input} value={this.props.inputs.isAlive} name="isAlive"/>
                    <button onClick={() => {console.log(this.props)}}>Add Bounty</button>
                </form>
            </div>
        )
    }
}

export default FormComponent