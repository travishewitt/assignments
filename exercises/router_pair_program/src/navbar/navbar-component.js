import React from 'react';
import {Link, Switch, Route} from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/men">Men</Link></li>
                <li><Link to="/women">Women</Link></li>
                <li><Link to="/story">Story</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        )
    }
}

export default Navbar