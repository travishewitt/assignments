import React from 'react';
import ReactDOM from 'react-dom';

import ListContainer from './list/list-container.js';


import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from './redux/reducers/index.js';

let store = createStore(mainReducer)


class App extends React.Component {
    render() {
        return (
            <ListContainer />
        )
    }
}


ReactDOM.render(
            <Provider store = {store}>
            <App />
            </Provider>,
            document.getElementById('root')
        )
