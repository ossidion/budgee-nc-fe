<script setup>
import Body from './components/Body.vue';
import Header from './components/Header.vue';

import Nav from './components/Nav.vue';
</script>

<template>
    <div id="appBody">
        
    <div>
        <Header />
    </div>
    <div class="mainContentDiv">
        
        <Body />
    </div>
    <footer>
        <Nav></Nav>
    </footer>
</div>
</template>

<style scoped>
#appBody{
    display:grid;
    grid-template-rows: 1fr 10fr 1fr;
    height: 100vh
}

#mainContentDiv{
  display: inline-flex;

}
</style>
