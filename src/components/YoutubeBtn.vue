<template>
  <a
    :href="href"
    target="_blank"
    :class="`text-center flex-1 mr-3 px-3 py-2 rounded border border-${myColor}-600 hover:bg-${myColor}-600 hover:text-white transition-colors`"
  >
    <slot></slot>
  </a>
</template>

<script setup>
import { computed, defineProps } from "vue";
const { href, color } = defineProps(["href","color"]);
const myColor = computed(()=>color ? color:'red')
console.log('====================================');
console.log(myColor.value);
console.log('====================================');
</script>
