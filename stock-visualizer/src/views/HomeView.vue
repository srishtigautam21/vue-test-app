<script setup>
import { ref } from 'vue'
let resp = ref('')
const callApi = async () => {
  const response = await fetch('http://localhost:8081')
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
