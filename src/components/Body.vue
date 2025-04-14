<script setup>
import PieChart from './PieChart.vue';
import { defineStore } from 'pinia'




</script>

<template>
    <div id="bodyDiv">
        <PieChart />
        <router-view></router-view>
    </div>
</template>

<style scoped>
#bodyDiv{
    display: flex;
    align-items: center;
    flex-direction: column;

    
}

</style>