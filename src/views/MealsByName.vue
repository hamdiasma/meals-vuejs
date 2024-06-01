<template>
  <div class="container m-auto py-8">
    <input
      type="text"
      v-model="keyWord"
      class="w-full rounded border-2 border-gray-200"
      placeholder="search meals"
      @change="serachMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 p-8">
    <MealItem :meals="meals" />
  </div>
</template>
<script setup>
import axiosClient from "@/axiosClient";
import MealItem from "@/components/MealItem.vue";
import store from "@/store";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const keyWord = ref("");

const meals = computed(() => store.state.serachMeals.data);

async function serachMeals() {
  store.dispatch("serachMealsActions", keyWord.value);
}

onMounted(() => {
  keyWord.value = route.params.name;
  if (keyWord.value) {
    serachMeals();
  }
});
</script>
