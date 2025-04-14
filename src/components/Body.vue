<script setup>
import PieChart from './PieChart.vue';
import { defineStore } from 'pinia'
import { generateStore } from './assets/stores/currentBudgetData';

const budgetData = generateStore()()
console.log(budgetData.count, "budgetData.count")
budgetData.increment()
console.log(budgetData.count,  "budgetData.count")

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