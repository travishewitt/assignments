import React, { Component } from 'react';
import ColorChangeComponent from './color-change-component.js'

class ColorChangeContainer extends Component {
    constructor() {
        super();
        this.state = {
            backgroundColor: "maroon"
        }
        this.handleColorChange = this.handleColorChange.bind(this);
    }
    handleColorChange(){
        this.setState((prevState)=>{
            if (prevState.backgroundColor === "maroon") {
                return {
                    backgroundColor: "orange"
                }
            } else {
                return {
                    backgroundColor: "maroon"
                }
            }
        })
    }
    render() {
        return (
            <ColorChangeComponent 
            backgroundColor = {this.state}
            handleClick = {this.handleColorChange}/>
        );
    }
}

export default ColorChangeContainer;