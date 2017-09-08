const initialState = {
    men: []
}

let mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOAD_DATA": 
            return {
                men: action.men
            }
        default: 
            return {
                ...state
            }
    }
}

export default mainReducer