<template>
  <div class="scoped">
    <slot name="scoped" v-bind="{ msg }" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "world",
    };
  },
};
</script>
