import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/counter.js';

import './css/index.css'

class App extends React.Component {
    render() {
        return (
            <Counter title="Points Counter"/>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)