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

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(post("Greetings fellas"))
store.dispatch(post("oh boy, here i go buying shoes again"))




