<script setup>
import { ref } from 'vue'
const resp = ref('')
const callApi = async () => {
  const response = await fetch('https://vue-test-app-api.vercel.app/')
  const data = response.json()
  resp = data
}
</script>

<template setup>
  <div class='home'>
    <button @click='callApi'>Hello</button>
    <div>{{ resp }}</div>
  </div>
</template>
