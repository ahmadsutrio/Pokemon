<script setup>
import Home from '../components/Home.vue'
</script>

<template>
  <div>
    <KeepAlive include="Home">
      <component :is="Home" />
    </KeepAlive>
  </div>
</template>

<style>
  
</style>