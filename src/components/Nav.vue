<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section className="nav">
    <RouterLink class="nav-item" to="/"
      >
      <img class="nav-icon" src="../assets/house.jpg"
    />
  </RouterLink>

      <RouterLink class="nav-item" to="/expenses"
      >
      <img class="nav-icon" src="../assets/pie-chart.jpg"
    />
  </RouterLink>
  <RouterLink class="nav-item" to="/saving-goals"
  >

      <img class="nav-icon" src="../assets/fire.jpg"
    />
</RouterLink>
  </section>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.nav-item {
  padding: 0.5rem;
  margin: 2rem;
}
.nav-icon {
  height: 1.5rem;
  pointer-events: none;
}
</style>

