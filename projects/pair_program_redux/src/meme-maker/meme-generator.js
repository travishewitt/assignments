import React from 'react';
import MemeContainer from './meme-container.js';

class MemeGenerator extends React.Component {
    genMemes() {
        return this.props.memes.map((meme, index) => {
            return <MemeContainer key = {index + meme.imgUrl} index = {index} meme = {meme} />
        })
    }
    render() {
        console.log(this.props)
        return(
            <div>
            {this.genMemes()} 
            </div>
           
        )
    }
}

export default MemeGenerator