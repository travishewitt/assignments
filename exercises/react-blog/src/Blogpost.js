import React from 'react';


class Blogpost extends React.Component {
    render() {
        return (
            <div className = "blogpost-wrapper">
                <div className = "post-wrapper">
                    <h1 className = "title">{this.props.post.title}</h1>
                    <h3 className = "subtitle">{this.props.post.subtitle}</h3>
                    <span className = "author">{this.props.post.author}</span>
                    <div className = "content-wrapper">
                        <p className = "blogPost">{this.props.post.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Blogpost;