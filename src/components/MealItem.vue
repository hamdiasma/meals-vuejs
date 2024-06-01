<template>
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
          <YoutubeBtn :href="meal.strYoutube" :color="'red'">Youtube</YoutubeBtn>
          <router-link
            :to="'/meal/' + meal.idMeal"
            class="text-center flex-1 px-3 py-2 rounded border border-green-600 hover:bg-green-600 hover:text-white transition-colors"
          >
            View
          </router-link>
        </div>
      </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
import YoutubeBtn from './YoutubeBtn.vue';
const { meals } = defineProps(["meals"])

</script>