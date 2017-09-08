import React from 'react';
import MenComponent from './men-component.js';

class MenContainer extends React.Component {
    render() {
        return (
            <MenComponent men = {this.props.item}/>
        )
    }
}

export default MenContainer