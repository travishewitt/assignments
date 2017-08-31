import React from 'react';
import ReactDOM from 'react-dom';

import FormContainer from './components/form/form-container.js';
import PostGenerator from './components/post/post-container-generator.js'


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }
    post = (post) => {
        this.setState((prevState) => {
            let newItems = [...prevState.items, post];
            return {items: newItems}
        })
        console.log(this.state)
    }
    delete = (index) => {
        this.setState((prevState) => {
            let newItems = [...prevState.items];
            newItems.splice(index, 1);
            return {items: newItems}
        })
    }
    edit = (index, post) => {
        this.setState((prevState) => {
            let newItems = [...prevState.items];
            newItems[index] = items;
            return {items: newItems}
        })
    }
    render() {
        return (
            <div>
                <FormContainer post = {this.post}/>
                <PostGenerator items = {this.state.items} delete = {this.delete} edit = {this.edit} {...this.state}/>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)