import React from 'react';
import Item from './item.js';

import { bindActionCreators } from 'redux';
import * as actionCreators from '../../redux/actions/index.js';
import { connect } from 'react-redux';


class ItemContainer extends React.Component {
    render() {
        console.log(this.props)
        return (
            <Item item = {this.props.item} delete = {this.props.deleteItem} index = {this.props.index}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
}

const mapStateToProps = (state) => {
    return state
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)