<template>
  <div>
    <h1 class="grade-header">Grades List</h1>
    <ul>
      <li v-for="grade in Grades" :key="grade.id">
        {{ grade.name }} ---- {{ grade.grade }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const Grades = ref([]);

    const fetchGrades = async () => {
      const response = await axios.get('http://localhost:3000/Grades');
      Grades.value = response.data;
    };

    onMounted(() => {
      fetchGrades();
    });

    return {
      Grades
    };
  }
};
</script>

<style scoped>
.grade-header {
  color: rgb(0, 0, 0);
}
</style>