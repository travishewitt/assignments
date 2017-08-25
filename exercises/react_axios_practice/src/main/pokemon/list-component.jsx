import React, { Component } from 'react';
import ItemComponent from './item-component.jsx'

class ListComponent extends Component {
    genPokemon() {
        return this.props.pokemonList.map((item,index)=>{
            return <ItemComponent key = {index} pokemon = {item}/>
        })
    }
    render() {
        return (
            <div className="container">
                <h1 className="jumbotron">Pokémon Brah</h1>
                <div className="row">
                    {this.genPokemon()}
                </div>
            </div>
        );
    }
}

export default ListComponent;