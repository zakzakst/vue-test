<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { provide } from "vue";

provide("my-key", "some-data");
</script>
