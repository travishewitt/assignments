const initialState = {
    expenses: [],
    filter: "all",
}

let mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_EXPENSES":
            return {...state,expenses: action.expenses}
        case "CHANGE_FILTER":
            return {...state,
                filter: action.filter}
        default:
            return {
                ...state
            }
    }
}

export default mainReducer