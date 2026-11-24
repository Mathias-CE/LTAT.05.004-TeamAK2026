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
    list.push("Includes at least one numeric value")
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

<style scoped>
form {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px 14px;
  align-items: center;
  max-width: 400px;
  margin: 40px auto;
  padding: 24px 28px;
  background: #eef3e2;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

label {
  text-align: right;
  font-size: 14px;
}

input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
}

input:focus {
  outline: none;
  border-color: #8aa9db;
}

.error {
  grid-column: 1 / -1;
  color: #b00020;
  font-size: 13px;
}

.error p {
  margin: 4px 0;
}

button {
  grid-column: 1 / -1;
  justify-self: center;
  padding: 8px 24px;
  border: none;
  border-radius: 16px;
  background: #8aa9db;
  color: white;
  font-size: 14px;
  cursor: pointer;
}

button:hover {
  background: #6f8fc4;
}
</style>