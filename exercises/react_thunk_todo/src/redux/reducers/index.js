let initialState = {
    todos: []
}

let mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_DATA": 
            return {todos: action.todos}
        default:
            return {
                ...state
            }
    }
}

export default mainReducer