<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('theme-dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const stored = localStorage.getItem('theme')
  if (stored) {
    isDark.value = stored === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  document.documentElement.classList.toggle('theme-dark', isDark.value)
})
</script>

<template>
  <button class="theme-toggle-button" @click="toggleTheme" :aria-pressed="isDark">
    <span class="sr-only">Toggle dark mode</span>
    <span class="icon-wrapper" :class="{ selected: !isDark }" v-html="sunIcon"></span>
    <span class="icon-wrapper" :class="{ selected: isDark }" v-html="moonIcon"></span>
  </button>
</template>

<script>
const sunIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" stroke="currentColor" fill="currentColor">
  <circle cx="128" cy="128" r="60" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle>
  <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 36V16M63 63 49 49m-13 79H16m47 65-14 14m79 13v20m65-47 14 14m13-79h20m-47-65 14-14"/>
</svg>`

const moonIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" stroke="currentColor" fill="currentColor">
  <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 112V64m24 24h-48m-24-64v32m16-16h-32m65 113A92 92 0 0 1 103 39a92 92 0 1 0 114 114Z"/>
</svg>`
</script>

<style scoped>
.theme-toggle-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 9999px;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 50%;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.icon-wrapper.selected {
  background-color: #73d622;
  color: white;
}

.theme-toggle-button svg {
  width: 20px;
  height: 20px;
  pointer-events: none;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  border: 0;
  padding: 0;
  margin: -1px;
}
</style>



