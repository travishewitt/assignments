import React from 'react';
import SynthVolume from './synth-volume.js';

import * as actionCreators from '../../redux/actions/index.js'
import { connect } from 'react-redux';

class SynthVolumeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            volume: props.volume
        }
    }
    handleVolume = (e) => {
        this.setState({
            volume: e.target.value
        })
        this.props.changeVolume(this.state.volume)
    }
    render() {
        return <SynthVolume volume = {this.state.volume} handleVolume = {this.handleVolume}/>
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators) (SynthVolumeContainer)