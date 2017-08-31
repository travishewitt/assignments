import React from 'react';

import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/index.js';
import { connect } from 'react-redux';

import Counter from './counter.js';


class CounterContainer extends React.Component {
    render() {
        console.log(this.props)
        return (
            <Counter up = {this.props.up} counter = {this.props.counter} clear = {this.props.clear} double = {this.props.double}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)