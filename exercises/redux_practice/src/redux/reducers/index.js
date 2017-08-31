let defaultState = {
    counter: 0
}

let mainReducer = function(state = defaultState, action) {
    
    switch(action.type) {
        case "UP": 
            return {counter: state.counter + action.incrementAmt}
        case "DOUBLE":
            return {counter: state.counter * action.incrementAmt}
        case "CLEAR":
            return {counter: defaultState.counter}
        default:
            return defaultState
    }
}

export default mainReducer;