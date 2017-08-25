import React from 'react';
import ReactDOM from 'react-dom';

import MemeContainer from './components/meme-container.js';

import './css/index.css';

class App extends React.Component {
    render() {
        return (
            <MemeContainer />
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)