import React from 'react';
import MemeGenerator from './meme-generator.js'

import * as actionCreators from '../redux/action-creators/index.js'
import { connect } from 'react-redux';


class MemeGeneratorContainer extends React.Component {
    render() {
        return <MemeGenerator memes = {this.props.memes}/>
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect (mapStateToProps, actionCreators) (MemeGeneratorContainer)