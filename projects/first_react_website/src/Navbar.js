import React, { Component } from 'react';
import {Glyphicon, Button, ButtonGroup} from 'react-bootstrap';

class Navbar extends Component {
    render() {
        return (
            <div className = "navbar">
                <div className = "navWrapper">
                    <h4 className = "navTitle"> Covfefe Land </h4>
                        <ButtonGroup className = "navglyph">
                            <Button><Glyphicon glyph = "glyphicon glyphicon-home" /></Button>
                            <Button><Glyphicon glyph = "glyphicon glyphicon-heart" /></Button>
                            <Button><Glyphicon glyph = "glyphicon glyphicon-piggy-bank" /></Button>
                        </ButtonGroup>
                </div>
            </div>
        );
    }
}

export default Navbar;