import React from 'react';

class Meme extends React.Component {
    render() {
        return (
            <div className = "componentContainer container">
                <form className = "form" onSubmit={this.props.handleSubmit}>
                    <input placeholder="Upper Text" type="text" name="upperText" onChange={this.props.handleInput} value={this.props.upperText}/>
                    <input placeholder="Lower Text" type="text" name="lowerText" onChange={this.props.handleInput} value={this.props.lowerText}/>
                    <input placeholder="Img URL" type="text" name="imgUrl" onChange={this.props.handleInput} value={this.props.imgUrl}/>
                    <button type="submit">Meme-o-genesis</button>
                </form>
                    <div className="meme row" style={{backgroundImage: `url('${this.props.meme.imgUrl}')`, backgroundSize: "cover", backgroundPosition: "center"}}>
                        <div className="upper">{this.props.meme.upperText}</div>
                        <div className="lower">{this.props.meme.lowerText}</div>
                    </div>
            </div>
        )
        
    }
}

export default Meme;