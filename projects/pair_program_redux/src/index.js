import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from './redux/reducers/index.js';

import FormContainer from './form/form-container.js';
import MemeGeneratorContainer from './meme-maker/meme-generator-container.js';

import './index.css';

let store = createStore(mainReducer)
store.subscribe(()=> {
    console.log(store.getState())
})

class App extends React.Component {
    render() {
        return(
            <div>  
                <FormContainer />
                <MemeGeneratorContainer />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store = {store} >
    <App />
    </Provider>,
    document.getElementById('root')
)