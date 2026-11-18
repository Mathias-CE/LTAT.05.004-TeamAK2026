<script setup>
import { ref, computed } from 'vue'

const email = ref('')
const password = ref('')
const submitted = ref(false)

const errors = computed(() => {
  const p = password.value
  const list = []

  if (p.length < 8 || p.length >= 15) {
    list.push('The password should be at least 8 characters and less than 15 characters')
  }
  if (!/[A-Z]/.test(p)) {
    list.push('Includes at least one uppercase alphabet character')
  }

  if ((p.match(/[a-z]/g) || []).length < 2) {
    list.push('Includes at least two lowercase alphabet characters')
  }

  if (!/[0-9]/.test(p)) {
    list.push("Include at least one numeric value")
  }

  if (!/^[A-Z]/.test(p)) {
    list.push('It should start with an uppercase letter')
  }


  if (p.includes('_') === false) {
    list.push("Password must include character '_'")
  }

  return list
})

function signup() {
  submitted.value = true
  if (errors.value.length === 0) {
    alert('Signup successful')
  }
}
</script>

<template>
  <form @submit.prevent="signup">
    <label for="email">Email</label>
    <input id="email" type="email" v-model="email" placeholder="Email" />

    <label for="password">Password</label>
    <input id="password" type="password" v-model="password" placeholder="Password" />

    <div v-if="submitted && errors.length > 0" class="error">
      <p v-for="error in errors" :key="error">The password is not valid - {{ error }}</p>
    </div>

    <button type="submit">Signup</button>
  </form>
</template>
