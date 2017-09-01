//this is how we do it in react
//import {createStore} from 'redux';

//in node
let redux = require('redux');

let createStore = redux.createStore;

//reducer

//default state when you start the app
let defaultState = {
    counter: 0
}

//create your reducer takes state and action as arguments
let mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "UP": 
            return Object.assign(state, {counter: state.counter + action.amount})
        case "DOWN":
            return Object.assign(state, {counter: state.counter - action.amount})
        default:
            return state;
    }
}


//action creators 

let up = (amount = 1) => {
    return {
        type: "UP",
        amount
    }
}

let down = (amount = 1) => {
    return {
        type: "DOWN",
        amount
    }
}

//create your store
const store = createStore(mainReducer);

store.subscribe(() => {
    console.log(store.getState());
}); 


console.log(store.getState());
store.dispatch(up(4));
store.dispatch(down(5));

