<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center hover:bg-green-300 px-2"
      >Home</router-link
    >
    <div class="flex items-center">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full hover:bg-green-300"
        >Search meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full hover:bg-green-300"
        >Meals By letter</router-link
      >
      <router-link
        :to="{ name: 'byIngredient' }"
        class="inline-flex items-center px-2 h-full hover:bg-green-300"
        >Meals by ingredients</router-link
      >
    </div>
  </header>
</template>
