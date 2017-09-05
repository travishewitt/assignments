export let loadMeals = (meals) => {
    return {
        type: "LOAD_MEALS",
        meals: [{
            food: "hard boiled egg",
            quantity: "1 egg",
            kcals: "78 calories",
            protein: "6g"
        }, 
        {
            food: "oatmeal",
            quantity: "1 cup",
            kcals: "290 calories",
            protein: "12g"
        }]
    }
}

export let addMeal = (meal) => {
    return {
        type: "ADD_MEAL",
        meal
    }
}