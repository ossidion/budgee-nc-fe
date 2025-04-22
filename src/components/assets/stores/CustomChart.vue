
<script setup>

import { useStore } from './currentBudgetData';

let budgetStore = useStore()

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: {
      labels: [],
      datasets: [
        {
          backgroundColor: [],
          data: []
        }
      ]
    },
  },
  options: {
    type: Object,
    required: true,
    default: {}
  },
  periodRatio: {
    type: Number,
    required: true,
    default: 0
  }
});




import { Chart, DoughnutController } from 'chart.js'



import { createTypedChart } from 'vue-chartjs'



class Custom extends DoughnutController{
  updateElement(arc, i, properties, mode) {
    

    // console.log(this.getDataset())

    const outerRadius = properties.outerRadius
    const innerRadius = properties.innerRadius
    properties.innerRadius = innerRadius +this.getDataset().cutouts[i]|| 0
    properties.outerRadius = outerRadius -this.getDataset().cutouts[i]|| 0


    // console.log(properties.innerRadius, new Date())
    
    super.updateElement(arc, i, properties, mode)
  }
  draw(){
    super.draw(arguments)

    // console.log(props.periodRatio)
    const ctx = this.chart.ctx;
  }
}
Custom.id = 'customDoughnut';
Custom.defaults = DoughnutController.defaults
Chart.register(Custom);




const CustomChart = createTypedChart("customDoughnut",Custom)


</script>

<template>


<div class="donut-container">
  <div class="donut-chart">
    <CustomChart :data="data" :options="options"></CustomChart>  </div>

  <div class="budget-overlay">
    <p>£{{ budgetStore.budget.budget.toFixed(2) }}</p>
    <p>left £{{ budgetStore.getSpendingLeft.toFixed(2) }}</p>
  </div>
</div>

</template>

<style scoped>
.donut-container {
  position: relative;
  width: 300px;
  height: 300px;
  margin: auto;
}

.donut-chart {
  width: 100%;
  height: 100%;
}

.budget-overlay {
  position: absolute;
  top: 58%;
  left: 50.5%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
  font-weight: bold;
  font-size: 1rem;
  pointer-events: none; 
}

</style>

