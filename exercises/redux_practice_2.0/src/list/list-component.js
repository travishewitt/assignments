import React from 'react';
import ItemContainer from './item/item-container.js'

class List extends React.Component {
    genList() {
        return this.props.items.map((item, index) => {
            return <ItemContainer key={index + item.title} item= {item} index = {index}/>
        })
    }
    render() {
        return (
            <div>
                {this.genList()}
            </div>
        )
    }
}

export default List