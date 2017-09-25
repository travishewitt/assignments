import React from 'react';
import * as actionCreators from '../redux/actions/index.js'
import { connect } from 'react-redux';

class Message extends React.Component {
    render() {
        return (
            <div className = "message-box col-md-2">
                <h4 className = "message-text">How I've Wasted My Money</h4><button className = "filterBtn" onClick = {() => {this.props.changeFilter("day")}}>Today</button><button className = "filterBtn" onClick = {() => {this.props.changeFilter("week")}}>This Week</button><button className = "filterBtn" onClick = {() => {this.props.changeFilter("month")}}>This Month</button><button className = "filterBtn" onClick = {() => {this.props.changeFilter("year")}}>This Year</button><button className = "filterBtn" onClick = {() => {this.props.changeFilter("all")}}>So Far</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect (mapStateToProps, actionCreators) (Message)