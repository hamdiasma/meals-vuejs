<template>
  <div class="container m-auto">
    <div class="flex">
      <div class="flex-grow-0 h-100">
        <div class="sticky">
          <router-link
            v-for="ingredient of ingrediens"
            :key="ingredient.idIngredient"
            class="block bg-[#fcfafa] rounded p-3 my-3 shadow"
            :to="{
              name: 'byIngredient',
              params: { ingredient: ingredient.strIngredient.toLowerCase() },
            }"
          >
            <h3 class="mb-3">
              <strong>{{ ingredient.strIngredient }}</strong>
            </h3>
          </router-link>
        </div>
      </div>

      <div class="bg-[#f1f0f0]">
        <div class="mySticky p-6 bg-[#aeacac]">
          <h3 class="">Resuls: {{ meals.length }}</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
          <MealItem :meals="meals" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import MealItem from "@/components/MealItem.vue";
import store from "@/store";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const meals = computed(() => store.state.serachMealsByIngrediens);
const ingrediens = computed(() => store.state.ingrediensState);

onMounted(() => {
  store.dispatch("getMealBuIngrediensAction", route.params.ingredient);
});

watch(route, () => {
  store.dispatch("getMealBuIngrediensAction", route.params.ingredient);
});
</script>

<style scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: #aeacac;
  padding: 10px;
  font-size: 20px;
  overflow: auto;
  height: 100vh;
}
.mySticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
</style>
