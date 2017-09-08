import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Link, Switch, Route} from 'react-router-dom';
import Home from './routes/home.js';
import About from './routes/about.js';
import Services from'./routes/services.js';

import defaultState from './default-state.js'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>oh hai thar.</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/" component = {Home}></Route>
                    <Route path="/about" component = {About}></Route>
                    <Route path="/services" component = {Services}></Route>
                </Switch>
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store = {store}><BrowserRouter><App /></BrowserRouter></Provider>,
    document.getElementById('root')
)