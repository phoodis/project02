<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';
</script>

<template>
  <div class="header">
    <ul class="nav-list">
      <li class="nav-item"><RouterLink to="/">HOME</RouterLink></li>
      <li class="nav-item"><RouterLink to="/AboutView">ABOUT</RouterLink></li>
      <li class="nav-item"><RouterLink to="/GradeView">GRADE</RouterLink></li>
    </ul>
  </div>
  
  <RouterView />
</template>

<style scoped>
.nav-list {
  margin: 0;
  padding: 0;
}

.nav-item {
  display: inline;
  margin-right: 10px;
}
</style>