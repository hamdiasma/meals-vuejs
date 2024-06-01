<template>
    <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import store from "./store";

onMounted(()=>{
  store.dispatch("getIensAction")
})
</script>

<style scoped></style>
