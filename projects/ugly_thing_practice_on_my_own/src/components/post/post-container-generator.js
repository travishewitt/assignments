import React from 'react';
import PostContainer from './post-container.js'

class PostGenerator extends React.Component {
    genPosts = () => {
        return this.props.items.map((item, index) => {
            return <PostContainer key = {index} item = {item} delete = {this.props.delete} edit = {this.props.edit} {...this.state}/>
        })
    }
    render () {
        return(
            <div>
                {this.genPosts()}
            </div>
        )
    }
}

export default PostGenerator;