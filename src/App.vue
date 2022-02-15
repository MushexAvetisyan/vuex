<template>
  <div id="app">
    <div class="post" v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{post.body}}</p>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    posts: [],
  }),
  async mounted() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=3"
    );
    const posts = await res.json();
    this.posts = posts;
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}

.post{
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
