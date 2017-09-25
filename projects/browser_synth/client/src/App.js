import React from 'react';
import SoundMaker from './sound-maker/sound-maker.js';
import SynthVolumeContainer from './synth/volume/synth-volume-container.js'

class App extends React.Component {
    render() {
        return (
            <div>
                <SoundMaker />
                <SynthVolumeContainer />
            </div>
        )
    }
}

export default App