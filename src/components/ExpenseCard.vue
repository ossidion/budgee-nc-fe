<script setup>
import { changeHSL } from '@/utils/chartData';
import { computed, reactive } from 'vue';
import { useSettings } from './assets/stores/localSettings';
import { useCurrencyFormatter } from '@/utils/useCurrencyFormatter';
import { toPrettyDate } from '@/utils/dateTime';

const props = defineProps({
  expense: {
    type: Object,
    required: true,
    default: {
      
    },
  },
  hex_code:String

});

console.log(props.expense.confirmed)

const settingsStore = useSettings()

const formattedAmount = computed(()=>useCurrencyFormatter(props.expense.amount,settingsStore.currency,settingsStore.locale))

const hex_code_ = reactive({hex_code:props.hex_code})

const formattedDate = toPrettyDate(props.expense.date)

const borderRad = computed(()=>{
  return props.expense.confirmed ? "10px 10px 10px":"10px 10px 10px 10px"
})

const bgColor = computed(()=>{
  return props.expense.confirmed ? changeHSL(props.hex_code,{s:100,l:95}) : "#BBBBBB"
})

const detailsColor = computed(()=>{
  return props.expense.confirmed ? changeHSL(props.hex_code,{s:100,l:10}) : "#000000"

})
const width = computed(()=>{
  return props.expense.confirmed ? "95%" : "80%"
})


const styleObject = reactive({
  width:width,
  "border-radius": borderRad,
  color: detailsColor,
  backgroundColor: bgColor,

  color: detailsColor,
  "border-style": "solid",
  "border-color":detailsColor,
  "border-width" :"2px",
})



</script>




<template>

<div class="expenseCard" :style="styleObject">


  <p>{{ props.expense.description }}</p>
  <p>{{formattedAmount }}</p>
  <p>{{formattedDate }}</p>
</div>

</template>

<style scoped>

</style>