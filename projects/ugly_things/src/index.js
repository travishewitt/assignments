import React from 'react';
import ReactDOM from 'react-dom';
import FormContainer from './components/form/form-container.js';
import ListComponent from './components/list/list-component.js';
import './css/index.css'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }
    post = (post) => {
        this.setState((prevState)=> {
            let newItems = [...prevState.items, post];
            return {items: newItems}
        })
    }
    delete = (index) => {
        this.setState((prevState)=> {
            let newItems = [...prevState.items];
            newItems.splice(index, 1);
            return {items: newItems}
        })
    }
    render() {
        return(
            <div>
             <FormContainer post = {this.post}/>
             <ListComponent items ={this.state.items} delete = {this.delete} edit = {this.edit}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)