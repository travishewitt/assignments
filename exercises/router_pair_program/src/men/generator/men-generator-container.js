import React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../redux/action-creator/index.js';
import MenGenerator from './men-generator.js';

class MenGeneratorContainer extends React.Component {
    componentDidMount() {
        this.props.loadData()
    }
    render() {
        return (
            <MenGenerator men = {this.props.men}/>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect (mapStateToProps, actionCreators) (MenGeneratorContainer);