import React from 'react';
import * as actionCreators from '../../redux/actions/index.js';
import { connect } from 'react-redux'

class SynthVolume extends React.Component {
    render() {
        return (
            <div>
                <h1>volume</h1>
                <input onChange = {this.props.handleVolume} type="range" min="0" max="1" step=".01" value={this.props.volume}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect (mapStateToProps, actionCreators) (SynthVolume)