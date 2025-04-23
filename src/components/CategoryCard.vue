<script setup>
import { changeHSL, shadeColor } from '@/utils/chartData'
import { computed, reactive } from 'vue'
import { RouterLink } from 'vue-router'
import { useCurrencyFormatter } from '@/utils/useCurrencyFormatter';
import { toRef } from 'vue'

const {id,name, amount, percentage,confirmed, hex_code,currency, locale} = defineProps({
  id:String,
  name: String,
  confirmed: Boolean,
  amount: Number,
  percentage: Number,
  hex_code:String,


})

const borderRad = computed(()=>{
  return confirmed ? "10px 10px 10px":"10px 10px 10px 10px"
})

const bgColor = computed(()=>{
  return confirmed ? changeHSL(hex_code,{s:100,l:80}) : "#BBBBBB"
})

const detailsColor = computed(()=>{
  return confirmed ? changeHSL(hex_code,{s:100,l:30}) : "#000000"

})
const width = computed(()=>{
  return confirmed ? "100%" : "80%"

})


const styleObject = reactive({
  width:width,
  "border-radius": borderRad,
  color: detailsColor,
  backgroundColor: bgColor,
  "border-style": "solid",
  "border-color":detailsColor,
  "border-width" :"2px",
})

const styleObjectDark = reactive({
  backGround: changeHSL(hex_code,{s:100,l:30}),
  color: changeHSL(hex_code,{s:100,l:80}),
  "border-style": "solid",
  "border-color":changeHSL(hex_code,{s:100,l:80}),
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