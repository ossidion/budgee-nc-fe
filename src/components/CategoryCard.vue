<script setup>
import { changeHSL, shadeColor } from '@/utils/chartData'
import { reactive } from 'vue'
import { RouterLink } from 'vue-router'
import { useCurrencyFormatter } from '@/utils/useCurrencyFormatter';
import { toRef } from 'vue'

// declare the props 

const {name, amount, percentage, hex_code} = defineProps({
  id:Number,
  name: String,
  amount: Number,
  percentage: Number,
  hex_code:String,

})


const formatter = new Intl.NumberFormat("en-GB", {
  style: 'currency',
  currency: "GBP"
})

console.log(hex_code)
const styleObject = reactive({
  color: changeHSL(hex_code,{s:100,l:30}),
  backgroundColor: changeHSL(hex_code,{s:100,l:80}),
  "border-style": "solid",
  "border-color":changeHSL(hex_code,{s:100,l:30}),
  "border-width" :"2px",
})

const formattedAmount = formatter.format(amount)

  const amountRef = toRef(props,'amount')
  const currencyRef = toRef(props,'currency')
  const localeRef = toRef(props,'locale')
  
  const formattedAmount = useCurrencyFormatter(amountRef,currencyRef,localeRef)

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