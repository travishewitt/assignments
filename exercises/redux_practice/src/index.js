import React from 'react';
import ReactDOM from 'react-dom';

import CounterContainer from './components/counter-container.js'
import './css/index.css'
 /*
 this is redux stuff. 
 */
import { Provider } from "react-redux";
import { createStore } from 'redux';
import mainReducer from './redux/reducers/index.js';

let store = createStore(mainReducer);
console.log(store)




class App extends React.Component {
    render() {
        return (
            <CounterContainer />
        )
    }
}

ReactDOM.render(<Provider store = {store}> 
                    <App /> 
                </Provider>,
    document.getElementById('root')
)