import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './form/form-container.js';
import ListContainer from './list/list-container.js'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import mainReducer from './redux/reducer/index.js';
import './index.css'



let store = createStore(mainReducer, applyMiddleware(thunk))

class App extends React.Component {
    render() {
        return (
            <div className = "bounty-app">
                <FormContainer />
                <ListContainer />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store = {store}><App /></Provider>,
    document.getElementById('root')
)