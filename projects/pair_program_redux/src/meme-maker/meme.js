import React from 'react';

class Meme extends React.Component {
    render() {
        return (
            <div>
                <div className = "meme" style={{backgroundImage: `url('${this.props.meme.imgUrl}')`, backgroundSize: "cover", backgroundPosition: "center"}}>
                        <div className = "upper">{this.props.meme.topText}</div>
                        <div className = "lower">{this.props.meme.botText}</div>
                        <button className = "btn btn-primary edit-btn" onClick = {this.props.handleToggle}>Edit</button>
                        <button className = "btn btn-danger delete-btn" onClick = {()=>{this.props.delete(this.props.index)}}>Delete</button>
                    </div>
                <div className={this.props.isToggledOn ? "show" : "hide"}>
                    <form action="">
                        <input type="text" placeholder="Image URL" name="imgUrl" onInput = {this.props.input}/>
                        <input type="text" placeholder="Top Text" name="topText" onInput = {this.props.input}/>
                        <input type="text" placeholder="Bottom Text" name="botText"  onInput = {this.props.input}/>
                        <button className = "btn btn-primary edit-done-btn" onClick = {this.props.done}>Done</button>
                    </form>
                </div>
               
            </div>
        )
    }
}

export default Meme