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
  


    <header>
      <div class="app-header">
        <img
          src="../assets/budgee-logo.png"
          alt="Budgee logo"
          class="app-logo" />
        <h1>Budgee</h1>
      </div>
    </header>

    <button @click="toggle - theme" class="header-button">toggle</button>

  </div>
</template>

<style scoped>

.header {
  padding: 1.5rem 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  transition: background-color 0.3s ease;
}

.app-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 3rem;
  font-weight: bold;
  color: #73d622;
}

.app-logo {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.header-button {
  display: block;
  margin: 0 auto;
  margin-top: 1rem;
  background-color: #86d021;
  color: black;
  padding: 0.2rem 1.2rem;
  font-size: 0.5rem;
  border: none;
  border-radius: 60%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-size: 1rem;
  cursor: pointer;
}

.header-button:hover {
  background-color: #74b31c;
  transform: translateY(-2px);
}

.header-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}
</style>


