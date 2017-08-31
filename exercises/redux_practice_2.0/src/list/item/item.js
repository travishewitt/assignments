import React from 'react';

class Item extends React.Component {
    render () {
        return (
            <div>
                <h1>{this.props.item.title}</h1>
                <h3>{this.props.item.description}</h3>
                <button onClick = {() => {this.props.delete(this.props.index)}}>X</button>
                <button>Edit</button>
            </div>
        )
    }
}

export default Item