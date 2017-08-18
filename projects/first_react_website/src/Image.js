import React from 'react';

class Image extends React.Component{
    render() {
        return <img src={this.props.url} className = "imgs" alt=""/>
    }
}

export default Image;