<template>
  <button :disabled="loading" @click="getPosts" id="button">Get posts</button>
  <p v-if="loading" role="alert" id="alert">Loading your posts...</p>
  <ul v-else>
    <li v-for="post in posts" :key="post.id" data-test="post">
      {{ post.title }}
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: null,
      loading: null,
    };
  },
  methods: {
    async getPosts() {
      this.loading = true;
      console.log("before api");
      this.posts = await axios.get("/api/posts");
      console.log("after api");
      this.loading = null;
      // setTimeout(() => {
      //   this.loading = null;
      // }, 1000);
    },
  },
};
</script>
