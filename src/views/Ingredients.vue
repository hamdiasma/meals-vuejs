<template>
  <div class="container m-auto">
    <h1 role="h1" class="my-10 mx-3"><strong> Ingredients </strong></h1>
    <input
      type="text"
      v-model="serchIngredient"
      class="w-full rounded border-2 border-gray-200 sticky mt-0"
      placeholder="search meals"
    />
    <router-link
      v-for="ingredient of computedIngrediens"
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
      <p class="mb-3">{{ ingredient.strDescription }}</p>
    </router-link>
  </div>
</template>
<script setup>
import axiosClient from "@/axiosClient";
import store from "@/store";
import { computed, onMounted, ref } from "vue";
const serchIngredient = ref("");

const ingrediens = computed(() => store.state.ingrediensState);
const computedIngrediens = computed(()=>{return ingrediens.value.filter(item=>item.strIngredient.toLowerCase().includes(serchIngredient.value))} )
</script>

<style scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: #fdfbfb;
  padding: 10px;
  font-size: 20px;
  overflow: auto;
  margin-bottom: 1rem;
}
</style>