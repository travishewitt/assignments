import React, { Component } from 'react';

class ColorChangeComponent extends Component {
    render() {
        return (
            <div className="box" style={this.props.styling}onClick={()=>this.props.handleClick(this.props.index)}></div>
        );
    }
}

export default ColorChangeComponent;