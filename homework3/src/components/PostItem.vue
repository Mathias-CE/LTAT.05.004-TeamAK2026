<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({ 
  id: Number, //id to each post
})

const store = useStore()

const post = computed(() => store.state.posts.find(post => post.id === props.id)) //computed updates value in real time

const date = computed(() =>
  new Date(post.value.createdAt).toLocaleDateString('en-US', { //timestate to each post
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })
)

function like() { //like button
  store.commit('incrementLikes', props.id)
}
</script>

<template>
  <article>
    <header>
      <span class="author">{{ post.author }}</span>
      <time :datetime="post.createdAt">{{ date }}</time>
    </header>

    <img v-if="post.image" :src="post.image" :alt="post.imageAlt" />

    <p>{{ post.text }}</p>

    <div class="likes">
      <button type="button" @click="like">👍</button>
      <span>{{ post.likes }} likes</span>
    </div>
  </article>
</template>
