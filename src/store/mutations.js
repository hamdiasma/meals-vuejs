export  function setSeracMealshMutation(state, meals){
    state.serachMeals.data = meals
}

export  function getMealsDetailMutation(state, detail){
    state.mealDetailState = detail
}

export  function getMealsLettersMutation(state, detail){
    state.serachMealsByLetters = detail
}

export  function getMealsIngrediensMutation(state, detail){
    state.serachMealsByIngrediens = detail
}

export  function getIngrediensMutation(state, ingrediens){
    state.ingrediensState = ingrediens
}