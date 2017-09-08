import React from 'react';
import ReactDOM from 'react-dom';

import Home from './routes/home.js';
import Men from './routes/men.js';
import MenGeneratorContainer from './men/generator/men-generator-container.js'
import Women from './routes/women.js';
import Story from './routes/story.js';
import Cart from './routes/cart.js';
import Navbar from './navbar/navbar-component.js'

import {BrowserRouter} from 'react-router-dom';
import { Link, Switch, Route } from 'react-router-dom';
 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from './redux/reducer/index.js';

let store = createStore(mainReducer)

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component = {Home} />
                    <Route path="/men" component = {MenGeneratorContainer} />
                    <Route path="/women" component = {Women} />
                    <Route path="/story" component = {Story} />
                    <Route path="/cart" component = {Cart} />
                </Switch>
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,
    document.getElementById('root')
)