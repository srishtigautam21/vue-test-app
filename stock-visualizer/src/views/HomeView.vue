<script setup>
const resp = ref("");
const callApi = async () => {
  const response = await fetch("https://vue-test-app-api.vercel.app/");
  const data = response.json();
  resp.value = data;
};
</script>

<template setup>
  <div class="home">
    <button @click="callApi">Hello</button>
    <div>{{ resp.value }}</div>
  </div>
</template>
