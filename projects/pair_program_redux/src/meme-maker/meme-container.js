 import React from 'react';
 import Meme from './meme.js';

 import * as actionCreators from '../redux/action-creators/index.js';
 import { connect } from 'react-redux'

 class MemeContainer extends React.Component {
     constructor() {
         super();
         this.state = {
             isToggledOn: false,
             inputs: {
                 imgUrl: "",
                 topText: "",
                 botText: ""
             }
         }
     }
     input = (e) => {
        e.persist();
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                [e.target.name]: e.target.value
                }
            }
        })
    }
    done = (e) => {
        e.preventDefault();
        this.props.editMeme(this.state.inputs, this.props.index)
    }
    handleToggle = () => {
        this.setState((prevState)=> {
            return {isToggledOn: !prevState.isToggledOn}
        })
        console.log(this.state.isToggledOn)
    }
     render() {
         return (
             <Meme meme = {this.props.meme} delete = {this.props.deleteMeme} index = {this.props.index} done = {this.done} input = {this.input} handleToggle = {this.handleToggle} isToggledOn = {this.state.isToggledOn}/>
         )
     }
 }

const mapStateToProps = (state) => {
    return state
}

 export default connect (mapStateToProps, actionCreators) (MemeContainer);