import React from 'react';
import ReactDOM from 'react-dom';

import FormContainer from './diary-form/form-container.js';
import MealGeneratorContainer from './meal-generator/meal-generator-container.js'
import './index.css'

import { Provider } from 'react-redux';
import { createStore } from 'redux'
import mainReducer from './redux/reducer/index.js'
let store = createStore(mainReducer)

class App extends React.Component {
    render() {
        return(
            <div>
                <FormContainer />
                <MealGeneratorContainer />
            </div>
            
        )
    }
}

ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>,
    document.getElementById('root')
)