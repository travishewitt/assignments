import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

class Menu extends Component {
    render() {
        return (
            <div className = "menuWrapper">
                <div className = "logoWrapper">
                    <h1>Wix</h1>
                </div>
                <div className = "linkWrapper">
                    <ul className = "links">
                        <li><a href="">Features</a></li>
                        <li><a href="">Explore</a></li>
                        <li><a href="">Subscriptions</a></li>
                        <li><a href="">Templates</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                </div>
                <div className = "signIn">
                    <Button bsStyle="primary" bsSize="large" className = "signButton" >Sign In</Button>
                </div>
            </div>
        );
    }
}

export default Menu;