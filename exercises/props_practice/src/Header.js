import React, { Component } from 'react';

class App extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default App;