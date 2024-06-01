<template>
  <div class="p-8">
    <input
      type="text"
      v-model="keyWord"
      class="w-full rounded border-2 border-gray-200"
      placeholder="search meals"
      @change="serachMeals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 p-8">
    <div
      v-for="meal in meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl overflow-hidden"
    >
      <router-link :to="'/meal/' + meal.idMeal">
        <img :src="meal.strMealThumb" alt="" class="h-60 w-full object-cover" />
      </router-link>
      <div class="p-3">
        <h3 class="font-semibold">{{ meal.strMeal }}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          quibusdam ipsam quos, assumenda, maiores quo praesentium,
        </p>
        <div class="mt-3 flex justify-between gap-2">
          <YoutubeBtn :href="meal.strYoutube">Youtube</YoutubeBtn>
          <router-link
            :to="'/meal/' + meal.idMeal"
            class="text-center flex-1 px-3 py-2 rounded border border-green-600 hover:bg-green-600 hover:text-white transition-colors"
          >
            View
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axiosClient from "@/axiosClient";
import YoutubeBtn from "@/components/YoutubeBtn.vue";
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
