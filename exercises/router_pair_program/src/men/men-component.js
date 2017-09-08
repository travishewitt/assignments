import React from 'react';

class MenComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.men.name}</h1>
                <h3>{this.props.men.description}</h3>
                <p>{this.props.men.price}</p>
            </div>
        )
    }
}

export default MenComponent