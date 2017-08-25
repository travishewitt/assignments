import React, { Component } from 'react';

class ItemComponent extends Component {
    render() {
        return (
            <div className="col-sm-3">
                <h3 className="text-center pokemonItem">{this.props.pokemon.name}</h3>
            </div>
        );
    }
}

export default ItemComponent;