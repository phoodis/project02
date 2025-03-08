import { createRouter, createWebHistory } from 'vue-router'; // ✅ รวม import ที่จำเป็น
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Grade from '../views/GradeView.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: Home
  },
  {
    path: '/AboutView',
    name: 'About',
    component: About
  },
  {
    path: '/GradeView',
    name: 'Grade',
    component: Grade
  }
];

const router = createRouter({
  history: createWebHistory(), // ✅ ใช้ createWebHistory() อย่างถูกต้อง
  routes
});

export default router; // ✅ export router แทน routes
