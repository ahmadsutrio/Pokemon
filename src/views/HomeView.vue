<script setup>
import { ref, watch } from 'vue';
import Home from '../components/Home.vue'
import Search from '@/components/Search.vue';

defineEmits(['keyword'])
let search = ref('')

const keyword = (value) => {
  search.value = value
}

</script>

<template>
  <div>
    <Search @keyword="keyword"></Search>
    <Home :keyword="search"></Home>
  </div>
</template>

<style>
  
</style>