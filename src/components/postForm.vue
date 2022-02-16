<template>
  <div class="app">
    <form @submit.prevent="submit">
      <input type="text" placeholder="Title" v-model="title">
      <input type="text" placeholder="Body" v-model="body">
      <button type="submit">Create Post</button>
      <hr>
    </form>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data: () => ({
    title: '',
    body: ''
  }),
  methods: {
    ...mapMutations(['createPost']),
    submit() {
      this.createPost({
        title: this.title,
        body: this.body,
        id: Date.now()
      })
      this.title = this.body = "";
    }
  }
}
</script>

<style scoped lang="scss">
input{
  display: block;
  width: 100%;
  border: 1px solid black;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
