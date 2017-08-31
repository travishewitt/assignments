import React from 'react';
import List from './list-component.js'

import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actions/index.js';
import { connect } from 'react-redux';

class ListContainer extends React.Component {
    componentDidMount() {
        this.props.loadData()
    }
    render() {
        return (
            <List items = {this.props.items}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
}

const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)