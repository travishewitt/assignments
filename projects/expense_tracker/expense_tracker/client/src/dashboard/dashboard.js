import React from 'react';
import PieChartComponent from './pie-chart/pie-chart-component.js';
import Message from '../message/message.js';

import * as actionCreators from '../redux/actions/index.js';
import { connect } from 'react-redux';



class Dashboard extends React.Component {
    componentDidMount(){
        this.props.loadExpenses()
    }
    render() {
        return (
            <div className="dashboard-box col-md-4">
                <div className="graph-container">
                    <PieChartComponent filter = {this.props.filter}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect (mapStateToProps, actionCreators) (Dashboard)