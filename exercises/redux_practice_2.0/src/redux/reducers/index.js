let defaultState = {
    items: []
}

let mainReducer = function (state = defaultState, action) {
    let newItems = [...state.items]
    switch(action.type) {
        case "LOAD_DATA": 
            return {items: action.data}
        case "DELETE_ITEM":
            newItems.splice(action.index, 1)
            return {items: newItems}
        case "ADD_ITEM":
            newItems = [...newItems, action.item]
            return {items: newItems}
        case "EDIT_ITEM":
            newItems[action.index] = action.editedItem
            return {items: newItems}
        default:
            return {
                ...state
            }
    }
}

export default mainReducer