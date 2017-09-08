import React from 'react';
import MenContainer from '../men-container.js';

import { Link, Route, Switch }

class MenGenerator extends React.Component {
        genMen() {
            return this.props.men.map((item, index) => {
                return <MenContainer key = {item.name} index = {index} item = {item}/>
            })
        }
    render() {
        return (
            <div>
            {this.genMen()}
            </div>
        )
    }
}

export default MenGenerator