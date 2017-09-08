import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';

import Service from './service.js';

import defaultState from '../default-state.js';

class Services extends React.Component {
    genLinks() {
        return defaultState.map((card, index) => {
            return <li key={index}><Link defaultState = {defaultState}to = {`/services/${index}`}>{card.name}</Link></li>
        })
    }
    render() {
        return (
            <div>
                <h1>services</h1>
                <ul>
                    {this.genLinks()}
                </ul>
                <Switch>
                    <Route path="/services/:index" component = {Service}/>
                </Switch>
            </div>
        )
    }
}

export default Services