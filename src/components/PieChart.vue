<script setup>

import { ref, toRaw } from 'vue';
import PieChartComponent from './PieChartComponent.vue';



const chartData = ref({labels: ['Clothing', 'Groceries', 'Books', 'Eating Out'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 50, 10]
      }
    ]})


    function incrementCount() {
        const newChartData = structuredClone(toRaw(chartData.value))
        
        newChartData.datasets[0].data[0]+=100
        
        chartData.value = newChartData

        console.log(chartData.value.datasets[0].data[0])
        
    }
</script>

<template>

<div id="pieChartDiv">
<PieChartComponent :chartData="chartData"/>
<button @click="incrementCount">+100 to books</button>
</div>

</template>

<style scoped>
#pieChartDiv{
    height: 40vh;
    border: solid white;


}

#pieChart{
    width: 100%;
}
</style>