import React from 'react';
import Link from "./Link.js"

class Navbar extends React.Component{
    constructor() {
        super();
        this.navLinks = ["Home", "About", "Contact"]
    }
    genLinks(){
        return this.navLinks.map((item)=> {
           return <Link key = {item} name = {item}/>
        })
    }
    render() {
        return (
            <div className = "navBar-wrapper">
                <ul className = "navBar"> 
                    {this.genLinks()}
                </ul>
            </div>
        )
    }
}

export default Navbar;