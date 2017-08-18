import React, { Component } from 'react';
import Link from './Link.js'

class Navbar extends Component {
    constructor(){
        super();
        this.links = ["Home", "About", "Contact"]
    }
    genLinks() {
        return this.links.map((item,index)=>{
           return ( <Link key = {item+index} link = {item}/>
           )
        })
    }
    render() {
        return (
            <div>
                {this.genLinks()}
            </div>
        );
    }
}

export default Navbar;