<template>
  <div class="about-container">
    <h1>About me</h1>
    <ul>
        <li v-for="student in Students" :key="student.id" class="student-item">
        <img :src="student.image" alt="Student Image" class="student-img" />
        {{ student.name }}
      </li>
        <li v-for="student in Students" :key="student.id" class="student-details">
                {{ student.id }}  {{ student.campus }} {{ student.yesr }} {{ student.faculty }}
        </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const Students = ref([]);

        const fetchStudents = async () => {
            const response = await axios.get('http://localhost:3000/Students');
            Students.value = response.data;
        };

        onMounted(() => {
            fetchStudents();
        });

        return {
            Students
        };
    }
};
</script>

<style scoped>
.student-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.student-details {
    color: violet;
}
</style>