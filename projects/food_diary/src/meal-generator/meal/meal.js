import React from 'react';

class Meal extends React.Component {
    render() {
        return (
            <div>
                <h1>Food: {this.props.meal.food}</h1>
                <h3>Quantity: {this.props.meal.quantity}</h3>
                <h3>kCals: {this.props.meal.kcals}</h3>
                <h3>Protein: {this.props.meal.protein}</h3>
            </div>
        )
    }
}

export default Meal