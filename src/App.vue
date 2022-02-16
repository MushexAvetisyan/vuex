<template>
  <div id="app">
    <post-form />
    <h1>{{ postsCount }}</h1>
    <div class="post" v-for="post in validPosts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import postForm from "@/components/postForm";

export default {
  // data: () => ({
  //   posts: [],
  // }),

  // computed: {
  //   allPosts() {
  //     return this.$store.getters.allPosts
  //   }
  // },

  computed: mapGetters(["validPosts", "postsCount"]),
  methods: mapActions(["fetchPosts"]),
  components: {
    postForm
  },

  async mounted() {
    // this.$store.dispatch('fetchPosts')
    this.fetchPosts(1);
  },
};
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post {
  border: 2px solid black;
  border-radius: 5px;
  margin-bottom: 1rem;
  text-align: left;
  padding: 10px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
