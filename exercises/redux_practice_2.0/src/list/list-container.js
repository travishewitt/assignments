import React from 'react';
import List from './list-component.js'

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



const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps, actionCreators)(ListContainer)