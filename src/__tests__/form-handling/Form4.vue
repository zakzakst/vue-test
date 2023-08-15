<template>
  <custom-input v-model="input" label="Text Input" class="text-input" />
</template>

<script>
import CustomInput from "./Form4Child.vue";

export default {
  components: [CustomInput],
  data() {
    return {
      input: "",
    };
  },
};
</script>
