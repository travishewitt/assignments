import React from 'react';

class Ugly extends React.Component {
    render() {
        return (
            <div className = "postContainer">
                <div className="row">
                    <div className = "postWrapper col-md-6 col-md-offset-3">
                        <h1>{this.props.item.title}</h1>
                        <div className = "description">{this.props.item.description}</div>
                        <img className = "imgUrl" src = {this.props.item.imgUrl} alt = {this.props.item.description}/>
                        <br/>
                        <button>Edit</button>
                        <button onClick = {this.props.delete}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ugly;