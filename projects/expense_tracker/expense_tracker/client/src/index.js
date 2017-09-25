import React from 'react';
import ReactDOM from 'react-dom';
import DashboardContainer from './dashboard/dashboard-container.js';
import SidebarBox from './sidebar/sidebar-component/sidebar-box.js';
import Message from './message/message.js'
import './css/index.css';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';
import * as actionCreators from './redux/actions/index.js';
import { Legend } from 'react-easy-chart'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import mainReducer from './redux/reducers/index.js';

let store = createStore(mainReducer, applyMiddleware(thunk))
//need to make server and database, make form, and then style, and that's my app.

class App extends React.Component {
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
    dataizeExpenses = (obj) => {
        let output = [];
        for (let key in obj) {
            output.push({
                key: key,
                value: obj[key],
            })
        }
        return output
    }
    categorizeExpense = (expenses) => {
        let placeholder = {}
        for (let i = 0; i < expenses.length; i++) {
            placeholder[expenses[i].category] ?
                placeholder[expenses[i].category] += expenses[i].cost :
                placeholder[expenses[i].category] = expenses[i].cost
        }
        return placeholder
    }
    render() {
        return (
            <div className="container-fluid container-custom">
                <div className = "row row-custom">
                    <SidebarBox />
                    <DashboardContainer />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
} 

App = connect (mapStateToProps, actionCreators) (App)
store.subscribe(() => {
    console.log(store.getState())
})

ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById('root')
)