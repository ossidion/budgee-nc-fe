<script setup>

import { computed, reactive, ref, toRaw, watch } from 'vue';
import PieChartComponent from './PieChartComponent.vue';
import { useStore } from './assets/stores/currentBudgetData';
import { useRouter } from 'vue-router';

let budgetStore = useStore()


const router = useRouter()




const chartData = computed(()=>(budgetStore.getCatPieDataFull))




</script>

<template>

  <div id="pieChartDiv">
    <PieChartComponent :chartData="chartData" :periodRatio="budgetStore.getRatioLeftOfPeriod"/>
  </div>

</template>

<style scoped>
#pieChartDiv {
  height: 40vh;



}

#pieChart {
  width: 100%;
}
</style>