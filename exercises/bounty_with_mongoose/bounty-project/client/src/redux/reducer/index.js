const initialState = {
    bounties: []
}

let mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_DATA": 
            return {bounties: action.bounties}
        default: 
            return {
                ...state
            }
    }
}

export default mainReducer