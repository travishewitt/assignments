let defaultState = {
    meals: []
}

let mainReducer = (state = defaultState, action) => {
    switch(action.type) {
        case "LOAD_MEALS":
            return {meals: action.meals}
        case "ADD_MEAL":
            let newMeals = [...state.meals]
            newMeals = [...newMeals, action.meal]
            return {meals: newMeals}
        default:
            return {
                ...state
            }
    }
}

export default mainReducer