import React from 'react';
import Meme from './meme-component.js';

class MemeContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            upperText: "",
            lowerText: "",
            imgUrl: "",
            meme: {}
        }
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            meme: {
                imgUrl: this.state.imgUrl,
                upperText: this.state.upperText,
                lowerText: this.state.lowerText
            }
        })
    }
    render () {
        return <Meme handleInput={this.handleInput} {...this.state} handleSubmit={this.handleSubmit}/>
    }
}

export default MemeContainer;