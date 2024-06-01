import axiosClient from "@/axiosClient";

export function serachMealsActions({commit},keyword){
  axiosClient(`search.php?s=${keyword}`).then(({data})=>{
    commit('setSeracMealshMutation', data.meals)
  })
}


export function getMealDetailsAction({commit},id){
    axiosClient(`lookup.php?i=${id}`).then(({data})=>{
    
        commit('getMealsDetailMutation', data?.meals[0])
    })
}

export function getMealByLettersAction({commit},letter){
    axiosClient(`search.php?f=${letter}`).then(({data})=>{
        commit('getMealsLettersMutation', data?.meals)
    })
}
export function getMealBuIngrediensAction({commit},ingredient){
    axiosClient(`filter.php?i=${ingredient}`).then(({data})=>{
        commit('getMealsIngrediensMutation', data?.meals)
    })
}
export function getIensAction({commit}){
    axiosClient(`list.php?i=list`).then(({data})=>{
        commit('getIngrediensMutation', data?.meals)
    })
}

