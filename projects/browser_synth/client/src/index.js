import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from './redux/reducers/index.js';

let store = createStore(mainReducer)
// store.subscribe(()=> {
//     console.log(store.getState())
// })

ReactDOM.render( 
<Provider store = {store} >
    <App /> 
</Provider>, 
document.getElementById('root')
);