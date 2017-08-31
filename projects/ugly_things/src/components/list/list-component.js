import React from 'react';
import UglyContainer from '../uglies/ugly-container.js';

class ListComponent extends React.Component {
    genUglies() {
        return this.props.items.map((item, index)=> {
            return <UglyContainer key={index} item={item} delete = {this.props.delete}/>
        })
    }
    render() {
        return(
            <div>
                {this.genUglies()}
            </div>
        )
    }
}

export default ListComponent;