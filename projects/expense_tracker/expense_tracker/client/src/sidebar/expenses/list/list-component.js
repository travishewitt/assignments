import React from 'react';
import ItemContainer from './item/item-container.js';

class ListComponent extends React.Component {
    genList() {
        return this.props.expenses.map((expense, index) => {
            return <ItemContainer expense = {expense} key = {index+expense._id} id={expense._id} />
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