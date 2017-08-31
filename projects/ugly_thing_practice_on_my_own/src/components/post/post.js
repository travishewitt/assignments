import React from 'react';

class Post extends React.Component {
    render() {
        return(
            <div className = "container">
                <div className="postWrapper">
                    <h1>{this.props.item.title}</h1>
                    <h6>{this.props.item.description}</h6>
                    <img src = {this.props.item.imgUrl} alt="" />
                    <button onClick = {this.props.delete}>Delete</button>
                    <button>Edit</button>
                </div>
            </div>
        )
    }
}

export default Post