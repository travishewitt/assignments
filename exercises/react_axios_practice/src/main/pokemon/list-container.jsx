import React, { Component } from 'react';
import ListComponent from './list-component.jsx';
import axios from 'axios';

const url="http://pokeapi.co/api/v2/pokemon/?limit=150";

class ListContainer extends Component {
    constructor() {
        super();
        this.state = {
            pokemonList: []
        }
    }
    loadData() {
        axios.get(url)
            .then((response) => {
            this.setState({
                pokemonList: response.data.results
            })
        })
            .catch((err) => {
                console.error(err)
            })
    }
    componentWillMount() {
        this.loadData();
    }
    render() {
        return (
            <ListComponent pokemonList = {this.state.pokemonList}/>
        );
    }
}

export default ListContainer;