<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';
</script>

<template>
  <div class="header">
    <ul>
      <li><RouterLink to="/">HOME</RouterLink></li>
      <li><RouterLink to="/AboutView">ABOUT</RouterLink></li>
      <li><RouterLink to="/GradeView">GRADE</RouterLink></li>
    </ul>
  </div>
  
  <RouterView />
</template>


<style>
/* Add your styles here */
</style>