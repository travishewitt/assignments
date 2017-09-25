import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actions/index.js';

class ItemComponent extends React.Component {
    render() {
        return (
            <div className = {this.props.inputs.isAlive ? "bounty-list__bounty--alive" : "bounty-list__bounty--dead"}>
                <div>
                    <p>Bounty Target: {this.props.bounty.firstName} {this.props.bounty.lastName}</p>
                    <p>Bounty Reward: {this.props.bounty.bountyReward}</p>
                    <button onClick = {this.props.handleToggle}>edit</button>
                    <button onClick = {()=> {this.props.deleteItem(this.props.id)}}>delete</button>
                </div>
                <div>
                    <form className = {this.props.isToggledOn ? "show" : "hide"} >
                        <input type="text" placeholder="First Name" name="firstName" onInput = {this.props.input}/>
                        <input type="text" placeholder="Last Name" name="lastName" onInput = {this.props.input}/>
                        <input type="text" placeholder="Bounty Amount" name="bountyAmount" onInput = {this.props.input}/>
                        <input type="text" placeholder="Is Alive" name="isAlive" onInput = {this.props.input} />
                        <button onClick = {this.props.submit}>Done</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators) (ItemComponent)