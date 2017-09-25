import React from 'react';
import Item from './item.js';

import { connect } from 'react-redux';
import * as actionCreators from '../../../../redux/actions/index.js';

class ItemContainer extends React.Component {
    delete = () => {
        this.props.deleteExpense(this.props.id)
    }
    render() {
        return (
            <Item expense = {this.props.expense} delete = {this.delete}/>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect (mapStateToProps, actionCreators) (ItemContainer)