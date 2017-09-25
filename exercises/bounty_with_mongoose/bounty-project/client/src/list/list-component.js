import React from 'react';
import ItemContainer from './item/item-container.js';

class ListComponent extends React.Component {
    genList() {
        return this.props.bounties.map((bounty, index) => {
            return <ItemContainer bounty = {bounty} key = {index+bounty._id} id = {bounty._id}/>
        })
    }
    render() {
        return (
            <div className = "list-box">
                {this.genList()}
            </div>
        )
    }
}

export default ListComponent