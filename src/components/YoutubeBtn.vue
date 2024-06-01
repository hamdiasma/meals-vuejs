<template>
  <a
    :href="href"
    target="_blank"
    :class="`text-center flex-1 mr-3 px-3 py-2 rounded border border-${color ?? 'red'}-600 hover:bg-${color ?? 'red'}-600 hover:text-white transition-colors`"
  >
    <slot></slot>
  </a>
</template>
<script setup>
import { defineProps } from "vue";
const { href,color } = defineProps(["href","color"]);
</script>
