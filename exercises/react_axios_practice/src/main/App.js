import React, { Component } from 'react';
import ListContainer from './pokemon/list-container.js'
import FormContainer from './form/form-container.js'

import axios from 'axios';

const url="https://api.vschool.io/travis/todo/";

class App extends Component {
    constructor() {
        super();
        this.state = {
            todoList: []
        }
    }
    postData = (todo) => {
        axios.post(url, todo)
            .then((response) => {
                this.loadData();
            })
            .catch((err)=>{
                console.error(err)
            })
    }
    loadData = () => {
        axios.get(url)
            .then((response) => {
            this.setState({
                todoList: response.data
            })
        })
            .catch((err) => {
                console.error(err)
            })
    }
    delete = (id) => {
        axios.delete(url + id)
            .then((response) => {
                this.loadData();
            })
            .catch((err)=>{
                console.error(err);
            })
    }
    render() {
        return (
            <div>
            <h1 className="jumbotron">To do</h1>
                <FormContainer postData = {this.postData}/>
                <ListContainer loadData = {this.loadData} todoList = {this.state.todoList} delete = {this.delete}/>
            </div>
        );
    }
}

export default App;