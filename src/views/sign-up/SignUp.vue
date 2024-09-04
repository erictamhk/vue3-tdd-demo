<template>
  <h1>Sign Up</h1>
  <div>
    <label for="username">Username</label>
    <input id="username" />
  </div>
  <div>
    <label for="email">E-mail</label>
    <input id="email" />
  </div>
  <div>
    <label for="password">Password</label>
    <input id="password" type="password" @input="onChangePassword" />
  </div>
  <div>
    <label for="password-repeat">Password Repeat</label>
    <input id="password-repeat" type="password" @input="onChangePasswordRepeat" />
  </div>
  <button :disabled="disabled">Sign Up</button>
</template>

<script setup>
import { ref } from 'vue'
const disabled = ref(true)
const password = ref('')
const passwordRepeat = ref('')

const onChangePassword = (event) => {
  password.value = event.target.value
  disabled.value = password.value !== passwordRepeat.value
}
const onChangePasswordRepeat = (event) => {
  passwordRepeat.value = event.target.value
  disabled.value = password.value !== passwordRepeat.value
}
</script>
