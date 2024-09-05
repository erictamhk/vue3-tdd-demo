<template>
  <h1>Sign Up</h1>
  <form @submit.prevent="submit">
    <div>
      <label for="username">Username</label>
      <input id="username" v-model="formState.username" />
    </div>
    <div>
      <label for="email">E-mail</label>
      <input id="email" v-model="formState.email" />
    </div>
    <div>
      <label for="password">Password</label>
      <input id="password" type="password" v-model="formState.password" />
    </div>
    <div>
      <label for="password-repeat">Password Repeat</label>
      <input id="password-repeat" type="password" v-model="formState.passwordRepeat" />
    </div>
    <button :disabled="isDisabled">Sign Up</button>
  </form>
</template>

<script setup>
import axios from 'axios'
import { ref, reactive, computed } from 'vue'
const formState = reactive({
  username: '',
  email: '',
  password: '',
  passwordRepeat: ''
})

const submit = () => {
  const { passwordRepeat, ...body } = formState
  axios.post('/api/v1/users', body)
}

const isDisabled = computed(() => {
  return formState.password || formState.passwordRepeat
    ? formState.password !== formState.passwordRepeat
    : true
})
</script>
