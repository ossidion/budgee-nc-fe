<script setup>
import Body from "./components/Body.vue";
import Header from "./components/Header.vue";

import Nav from "./components/Nav.vue";

import {onMounted} from "vue";
import {useUserStore} from "@/components/assets/stores/userStore";

const userStore = useUserStore();

onMounted(() => {
  userStore.setUser({
    _id: "lisa-001",
    username: "lisaoliver",
    name: "Lisa Oliver",
    email: "lisa@example.com",
    avatar: "https://i.pravatar.cc/150?img=47",
    preferences: ["currency=GBP"],
  });
});
</script>

<template>
  <div id="appBody">
    <div>
      <Header />
    </div>
    <div class="mainContentDiv">
      <Body />
    </div>
    <footer class="footer">
      <Nav></Nav>
    </footer>
  </div>
</template>

<style scoped>
#appBody {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  overflow: hidden;
}

.mainContentDiv {
  overflow: hidden;
}
</style>


