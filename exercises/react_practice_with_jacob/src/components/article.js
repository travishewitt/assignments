import React from 'react';

class Article extends React.Component {
    render () {
        return (
            <div className="article">
                <h1>{this.props.title}</h1>
                <img src={this.props.src} alt=""/>
                <button>like</button>
            </div>
        )
    }
}

export default Article;