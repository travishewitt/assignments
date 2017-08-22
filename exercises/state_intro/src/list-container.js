import React, { Component } from 'react';
import ColorChangeComponent from './color-change-component.js';

class ListContainer extends Component {
    constructor() {
        super();
        this.state = {
            stylings: [
                {backgroundColor: "maroon"},
                {backgroundColor: "maroon"},
                {backgroundColor: "maroon"},
                {backgroundColor: "maroon"},
                {backgroundColor: "maroon"}
            ]
        }
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(index){
        this.setState((prevState)=>{
            let newState = {
                ...prevState
            }
            if(prevState.stylings[index].backgroundColor === "maroon") {
                newState.stylings[index].backgroundColor = "orange";
                return newState;
            } else {
                newState.stylings[index].backgroundColor = "maroon";
                return newState;
            }
        })
    }
    genColorChangers() {
        return this.state.stylings.map((styling, index)=> {
            return <ColorChangeComponent 
                        styling = {styling} 
                        key = {index} 
                        handleClick ={this.changeColor}
                        index = {index} />
        })
    }
    render() {
        return (
            <div className = "colorWrapper">
                {this.genColorChangers()}
            </div>
        );
    }
}

export default ListContainer;