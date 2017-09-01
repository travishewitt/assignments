let redux = require("redux");
let createStore = redux.createStore;

let defaultState = {
    comments: []
}

let post = (comment) => {
    return {
        type: "POST",
        comment
    }
}

let mainReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "POST":
            let newArr = [...state.comments, action.comment]
            return Object.assign(state, {comments: newArr});
        default: 
            return state;
    }
}

let store = createStore(mainReducer);
store.dispatch(post("Greetings fellas"))

console.log(store.getState())