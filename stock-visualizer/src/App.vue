<template>
  <div class='bg-mainBackround w-full h-screen m-0'>
      <HomeView />
  </div>
</template>

<script>
import HomeView from './views/HomeView.vue'
/* eslint-disable */
export default {
  name: 'App',
    components: {
       HomeView
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
