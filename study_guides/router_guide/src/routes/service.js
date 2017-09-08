import React from 'react';
import defaultState from '../default-state.js'

class Service extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{defaultState[this.props.match.params.index].name}</h1>
                <h2>{defaultState[this.props.match.params.index].description}</h2>
            </div>
        )
    }
}

export default Service