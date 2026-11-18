import { createStore } from 'vuex'
import posts from '../data/posts.json'

export default createStore({ //export store
  state() { //store data aka posts
    return {
      posts: posts,
    }
  },

  mutations: {
    incrementLikes(state, id) { //increases like amount by 1, like button calls this
      const post = state.posts.find(post => post.id === id)
      post.likes++
    },
    resetLikes(state) { //sets like to 0, reset button calls this
      state.posts.forEach(post => { //goes through each post
        post.likes = 0
      })
    },
  },
})
