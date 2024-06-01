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