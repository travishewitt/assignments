import React from 'react';
import Dashboard from './dashboard.js';

class DashboardContainer extends React.Component {
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
            <Dashboard filter = {this.filter}/>
        )
    }
}

export default DashboardContainer