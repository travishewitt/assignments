let defaultState = {
    items: []
}

let mainReducer = function (state = defaultState, action) {
    switch(action.type) {
        case "LOAD_DATA": 
            return {items: action.data}
        case "DELETE_ITEM":
            let newItems = [...state.items]
            newItems.splice(action.index, 1)
            return {items: newItems}
        default:
            return {
                ...state
            }
    }
}

export default mainReducer