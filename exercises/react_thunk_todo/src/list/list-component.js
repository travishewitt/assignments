import React from 'react';
import ItemContainer from './item/item-container.js';


class ListComponent extends React.Component {
    genList () {
        return this.props.todos.map((item, index) => {
            return <ItemContainer item = {item} key = {index+item.title} id = {item._id}/>
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

export default ListComponent