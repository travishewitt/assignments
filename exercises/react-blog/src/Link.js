import React from "react";

class Link extends React.Component{
    render() {
        return (
            <li className = "navbar-item"><a href= "">{this.props.name}</a></li>
        )
    }
}

export default Link;