let defaultState = {
        volume: 0,
        // frequency: null,
}

let mainReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "CHANGE_VOLUME": 
            return {
                ...state,
                volume: Number(action.volume)
            }
        default:
            return {
                ...state
            }
    }
}

export default mainReducer;