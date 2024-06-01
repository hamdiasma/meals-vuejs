<template>
  <div class="flex p-8 items-center justify-center">
    <div class="flex flex-wrap justify-center gap-2 mt-2">
      <router-link
        v-for="letter of letters"
        :key="letter"
        :to="{ name: 'byLetter', params: { letter } }"
        class="border border-gray-600 bg-gray-600 hover:bg-gray-600 hover:text-white transition-colors w-7 h-7 text-center"
      >
        {{ letter }}
      </router-link>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 p-8">
   <MealItem :meals="meals"/>
  </div>

</template>
<script setup>
import { computed, onMounted, watch } from "vue";
import store from "@/store";
import { useRoute } from "vue-router";
import MealItem from "@/components/MealItem.vue";
const route = useRoute();

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.serachMealsByLetters);

watch(route,()=>{
    store.dispatch("getMealByLettersAction", route.params.letter);
})

onMounted(() => {
    store.dispatch("getMealByLettersAction", route.params.letter);
});
</script>
