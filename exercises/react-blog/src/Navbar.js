import React from 'react';

class Navbar extends React.Component{
    render() {
        return (
            <div className = "navBar-wrapper">
                <ul className = "navBar"> 
                    <li className = "navbar-item"><a>Home</a></li>
                    <li className = "navbar-item"><a>About</a></li>
                    <li className = "navbar-item"><a>Pog Land</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;