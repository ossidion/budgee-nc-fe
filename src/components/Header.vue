<script setup>
import { ref, onMounted } from 'vue';

const darkMode = ref(false);

function toggleTheme() {
  darkMode.value = !darkMode.value;
  if (darkMode.value) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
  localStorage.setItem('darkMode', darkMode.value);
}

onMounted(() => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'true') {
    darkMode.value = true;
    document.body.classList.add('dark');
  }
});
</script>

<template>
      <header class="text-2xl font-bold">Budgee</header>


      <button @click="toggleTheme"
        class="header-button p-3 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300">
        {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
      </button>
  

</template>

<style scoped>
</style>
