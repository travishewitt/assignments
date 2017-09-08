import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../redux/actions/index.js';

class ItemComponent extends React.Component {
    render() {
        return (
                <div>
                    <div>
                        <h1>{this.props.item.title}</h1>
                        <p>{this.props.item.description}</p>
                        <button onClick = {this.props.handleToggle}>edit</button>
                        <button onClick = {() => {this.props.deleteItem(this.props.id)}}>delete</button>
                    </div>
                    <div>
                        <form className = {this.props.isToggledOn ? "show" : "hide"} >
                            <input name="title" type="text" placeholder="Title" onInput = {this.props.input}/>
                            <input name="description"type="text" placeholder="Description" onInput = {this.props.input}/>
                            <button onClick = {this.props.submit}>Done</button>
                        </form>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators) (ItemComponent)