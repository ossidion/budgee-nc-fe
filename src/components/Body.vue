<script setup>
import PieChart from './PieChart.vue';
import { defineStore } from 'pinia'
import { generateStore } from './assets/stores/currentBudgetData';
import { generateCategoryData, generateExpenseData } from '@/utils/testData';

let categoryData = []
let budgetData = undefined
generateCategoryData(5)
.then((res)=> {
    categoryData = res
    return generateExpenseData(categoryData, 500)
})
.then((expensesData)=>{
    budgetData = generateStore({categoryData, expensesData})()
})



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