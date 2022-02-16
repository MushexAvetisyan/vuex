export default {
  state: {
    posts: []
  },



  getters: {
    allPosts(state) {
      return state.posts
    },
    postsCount(state) {
      return state.posts.length
    },
    // validPosts(state) {
    //   return state.posts.filter(p => {
    //     return p.title && p.body
    //   })
    // }
  },



  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost)
    }
  },



  actions: {
   async fetchPosts(ctx, limit=10) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
      );
      const posts = await res.json();

       ctx.commit('updatePosts', posts)
    }
  },
}
