<script setup>
import { changeHSL, shadeColor } from '@/utils/chartData'
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'
import { useCurrencyFormatter } from '@/utils/useCurrencyFormatter';
import { toRef } from 'vue'

// declare the props 

const {name, amount, percentage, hex_code,currency, locale} = defineProps({
  id:Number,
  name: String,
  amount: Number,
  percentage: Number,
  hex_code:String,


})




const styleObject = reactive({
  color: changeHSL(hex_code,{s:100,l:30}),
  backgroundColor: changeHSL(hex_code,{s:100,l:80}),
  "border-style": "solid",
  "border-color":changeHSL(hex_code,{s:100,l:30}),
  "border-width" :"2px",
})



  
  const formattedAmount = useCurrencyFormatter(amount,currency,locale)

</script>

<template>
    <RouterLink :to="/expenses/+id" class="categoryCard" :style="styleObject">

    
      <p class="category-card-name">{{ name }}</p>
      
      <p>{{ formattedAmount }}</p>
      <div >
        <p class="category-card-percentage" >{{ percentage }}%</p>
      </div>

  </RouterLink>
</template>


<style scoped>



</style>