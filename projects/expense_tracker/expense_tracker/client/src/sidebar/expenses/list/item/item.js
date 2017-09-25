import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <div className="expense-box">
                <div className="expense-item">
                    <p>{this.props.expense.description}</p>
                </div>
                <div className="expense-item">
                    <p>${this.props.expense.cost.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</p>
                </div>
                <div className="expense-item">
                    <button className = "glyphicon glyphicon-trash" onClick={() => { this.props.delete(this.props.id) }}></button>
                </div>
            </div>
        )
    }
}

export default Item;