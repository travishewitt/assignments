import React from 'react';
import * as actionCreators from '../redux/actions/index.js';
import { connect } from 'react-redux'


class SoundMaker extends React.Component {
    componentDidMount() { 
        window.audioContext = window.audioContext || new AudioContext();
    }
    componentWillUnmount() {
        this.audioContext.close();
    }
    shouldComponentUpdate(prev, next){
        
        this.makeSound(this.props.volume)
        return true;
    }
    makeSound(volume) {
        console.log(volume);
        var oscillator = window.audioContext.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.value = 400;
        var vol = window.audioContext.createGain();
        oscillator.connect(vol);
        vol.connect(window.audioContext.destination)
        vol.gain.value = volume
        // oscillator.start();
    }
    render() {
        return null
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect (mapStateToProps, actionCreators) (SoundMaker);