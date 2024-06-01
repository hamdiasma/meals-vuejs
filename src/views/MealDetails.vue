<template>
    <div class="container m-auto">
     <h1 class="text-center my-5">{{ detail.strMeal }}</h1>
     <img :src="detail.strMealThumb" alt="" class="h-60 w-full object-cover" /> 
   
    <div class="grid grid-cols-1 md:grid-cols-3 mb-5 py-7 px-3 bg-[#d9d7d7]">
        <div class="text-center">
           <strong class="mr-2"> Category:</strong>{{ detail.strCategory }}
        </div>
        <div class="text-center">
           <strong class="mr-2"> Area:</strong>{{ detail.strArea }}
        </div>
        <div class="text-center">
           <strong class="mr-2">tags:</strong>{{ detail.strTags?.split(",")[0] }}
        </div>
    </div>
    <div class="mb-3">
        {{ detail.strInstructions }}
    </div>
    <div class="grid  grid-cols-1 md:grid-cols-2">
      <div class="mb-3">
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul>
            <template v-for="(a, i) in new Array(20)" :key="i">
              <li v-if="detail[`strIngredient${i+1}`]"> 
               {{ i +1 }} : {{detail[`strIngredient${i+1}`]}}
            </li>
            </template>
        </ul>
      </div>
      <div class="mb-3">
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul>
            <template v-for="(a, i) in new Array(20)" :key="i">
              <li v-if="detail[`strMeasure${i+1}`]"> 
               {{ i +1 }} : {{detail[`strMeasure${i+1}`]}}
            </li>
            </template>
        </ul>
      </div>
    </div>
    <div class="mt-3">
        <YoutubeBtn :href="detail.strYoutube">Youtube</YoutubeBtn>
        <YoutubeBtn :href="detail.strSource" :color="'green'">View Original Source</YoutubeBtn>
    </div>
   </div>
</template>
<script setup>
import YoutubeBtn from "@/components/YoutubeBtn.vue";
import store from "@/store";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute()

const detail = computed(()=>store.state.mealDetailState)
// console.log(detail.value.meals[0])
console.log('====================================');
        console.log(detail.value);
        console.log('====================================');
onMounted(()=>{
    store.dispatch("getMealDetailsAction", route.params.id)
})

</script>