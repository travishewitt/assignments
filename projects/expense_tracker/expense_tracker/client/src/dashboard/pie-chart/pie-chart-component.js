import React from 'react';
import { PieChart } from 'react-easy-chart';
import { Legend } from 'react-easy-chart';
import Message from '../../message/message.js';

import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actions/index.js';


class PieChartComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            dataDisplay: ""
        }
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
        console.log(this.state);

        return (

            <div>
                <Legend
                    data={this.dataizeExpenses(this.categorizeExpense(this.props.expenses))} dataId={'key'}
                />
                <Message />
                <div>

                    <PieChart
                        size={400}
                        data={this.dataizeExpenses(this.categorizeExpense(this.filter(this.props.filter)))}
                        clickHandler={
                            (d) => this.setState({
                                dataDisplay: `You have wasted $${d.value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')} on ${d.data.key}`
                            })
                        }
                        styles={{
                            '.chart_text': {
                                fontSize: '2em',
                                fill: "white"
                            }
                        }}
                    />
                </div>
                <div className="click-display">
                    {this.state.dataDisplay ? this.state.dataDisplay : 'Click on a segment to show the value'}
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators)(PieChartComponent);