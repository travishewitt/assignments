import React from 'react';
import Ugly from './ugly.js'

class UglyContainer extends React.Component{
    constructor() {
        super();
        this.state= {
            toggled: false,
        }
    }
    toggleEdit
    render() {
        return (<Ugly item = {this.props.item} delete = {this.props.delete} />)
    }
}

export default UglyContainer