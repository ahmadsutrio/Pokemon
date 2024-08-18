<script setup>
import Home from '../components/Home.vue'
import Search from '@/components/Search.vue';
</script>

<template>
  <div>
    <component :is="Search"/>
    <KeepAlive include="Home">
      <component :is="Home" />
    </KeepAlive>
  </div>
</template>

<style>
  
</style>