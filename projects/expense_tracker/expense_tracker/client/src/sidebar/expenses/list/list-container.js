import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../redux/actions/index.js';
import ListComponent from './list-component.js';

class ListContainer extends React.Component {
    componentDidMount() {
        this.props.loadExpenses()
    }
    filter = (filter) => {
        return this.props.expenses.filter((expense) => {
            let newDate = new Date(expense.createdAt);
            let now = new Date();
            if (filter === "all") {
                return true
            } else if (filter === "year") {
                return newDate.getYear() === now.getYear();
            } else if (filter === "month") {
                return newDate.getMonth() === now.getMonth();
            } else if (filter === "week") {
                return newDate.getWeek() === now.getWeek();
            } else if (filter === "day") {
                return newDate.getDay() === now.getDay();
            }
        })
    }
    render() {
        return (
            <ListComponent expenses = {this.filter(this.props.filter)}/>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect (mapStateToProps, actionCreators) (ListContainer)