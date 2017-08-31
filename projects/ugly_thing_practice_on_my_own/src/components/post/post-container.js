import React from 'react';
import Post from './post.js';

class PostContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggledOn: false,
            items: {
                title: {props.item.title},
                description: {props.item.description},
                imgUrl: {props.item.imgUrl}
        }
    }
    handleClick () {
        this.setState((prevState) => {
            isToggledOn: !prevState.isToggledOn
        })
    }
    render() {
        return(
            <Post item = {this.props.item} handleClick = {this.handleClick} delete = {this.props.delete} edit = {this.props.edit}/>
        )
    }
}

export default PostContainer;