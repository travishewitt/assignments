import React from 'react';
import Meal from './meal.js';

class MealContainer extends React.Component {
    render() {
        return (
            <Meal meal = {this.props.meal}/>
        )
    }
}

export default MealContainer