<template>
  <button @click="handleClick">Increment</button>
</template>

<script>
export default {
  name: "Counter",

  data() {
    return {
      count: 0,
    };
  },

  methods: {
    // handleClick() {
    //   this.count += 1;
    //   this.$emit("increment", this.count);
    // },
    handleClick() {
      this.count += 1;
      this.$emit("increment", {
        count: this.count,
        isEven: this.count % 2 === 0,
      });
    },
  },
};
</script>
