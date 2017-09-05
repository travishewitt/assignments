import React from 'react'
import MealGenerator from './meal-generator.js';

import * as actionCreators from '../redux/actions/index.js'
import { connect } from 'react-redux'

class MealGeneratorContainer extends React.Component {
    componentDidMount() {
        this.props.loadMeals()
    }
    render() {
        return <MealGenerator meals = {this.props.meals}/>
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect (mapStateToProps, actionCreators)(MealGeneratorContainer)