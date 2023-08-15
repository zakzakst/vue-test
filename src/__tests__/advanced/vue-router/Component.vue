<template>
  <button @click="redirect">Click to Edit</button>
</template>

<script>
export default {
  props: {
    isAuthenticated: null,
  },
  methods: {
    redirect() {
      if (this.isAuthenticated) {
        this.$router.push(`/posts/${this.$route.params.id}/edit`);
      } else {
        this.$router.push("/404");
      }
    },
  },
};
</script>
