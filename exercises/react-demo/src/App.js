import React from 'react';
import Name from './Name'

function SubComp () {
    return <h1>This is a sub-component!</h1>
}
const str = "poop"

class App extends React.Component {
    render() {
        return (
            <div>
                <h1 className = {str}>This is a component!</h1>
                <SubComp />
                <Name />
            </div>
        ) 
    }
}

export default App;

