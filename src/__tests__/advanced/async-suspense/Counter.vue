<template>
  <p>Count: {{ count }}</p>
  <button @click="handleClick">Increment</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count += 1;
    },
  },
};
</script>
