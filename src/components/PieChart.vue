<script setup>

import { ref, toRaw } from 'vue';
import PieChartComponent from './PieChartComponent.vue';
import { useStore } from './assets/stores/currentBudgetData';

let budgetStore = useStore()


budgetStore.addExpense()

const categoryData = budgetStore.getCategories


function printLeft (){
  console.log(budgetStore.getSpendingLeft)
}

</script>

<template>

  <div id="pieChartDiv">
    <PieChartComponent :chartData="budgetStore.getCatPieData" />
    <button @click="printLeft">printLeft</button>
  </div>

</template>

<style scoped>
#pieChartDiv {
  height: 40vh;
  border: solid white;


}

#pieChart {
  width: 100%;
}
</style>