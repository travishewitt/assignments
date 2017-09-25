import React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../redux/actions/index.js';
import ListComponent from './list-component.js';

class ListContainer extends React.Component {
    componentDidMount() {
        this.props.loadData()
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <ListComponent className ="bounty-list" bounties = {this.props.bounties} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators) (ListContainer)