import React from 'react';
import MealContainer from './meal/meal-container.js'

class MealGenerator extends React.Component {
    genMeals() {
        return this.props.meals.map((meal, index) => {
            return <MealContainer key = {index + meal.food} meal = {meal} index = {index} />
        })
    }
    render() {
        return(
            <div>
                {this.genMeals()}
            </div> 
        )
    }
}

export default MealGenerator;