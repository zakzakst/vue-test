<template>
  <div>
    <input v-model="password" />
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: "Password",
  data() {
    return {
      password: "",
    };
  },
  props: {
    minLength: {
      type: Number,
    },
  },
  computed: {
    error() {
      if (this.password.length < this.minLength) {
        return `Password must be at least ${this.minLength} characters.`;
      }
      return;
    },
  },
};
</script>
