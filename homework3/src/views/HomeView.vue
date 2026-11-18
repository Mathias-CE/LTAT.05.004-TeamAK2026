<script setup>
import { useStore } from 'vuex'
import PostItem from '../components/PostItem.vue'

const store = useStore()

function resetLikes() {
  store.commit('resetLikes')
}
</script>

<template>
  <section>
    <PostItem
      v-for="post in store.state.posts"
      :key="post.id"
      :id="post.id"
    />
  </section>

  <button type="button" class="reset" @click="resetLikes">Reset likes</button>
</template>
