<script setup>
import { changeHSL } from '@/utils/chartData';
import { reactive } from 'vue';
import { useSettings } from './assets/stores/localSettings';
import { useCurrencyFormatter } from '@/utils/useCurrencyFormatter';

const props = defineProps({
  expense: {
    type: Object,
    required: true,
    default: {
      
    },
  },
  hex_code:String

});

const settingsStore = useSettings()

const formattedAmount = useCurrencyFormatter(props.expense.amount,settingsStore.currency,settingsStore.locale)

const hex_code_ = reactive({hex_code:props.hex_code})



const styleObject = reactive({
  color: changeHSL(hex_code_.hex_code,{s:100,l:30}),
  backgroundColor: changeHSL(hex_code_.hex_code,{s:100,l:95}),
  "border-style": "solid",
  "border-color":changeHSL(props.hex_code,{s:100,l:30}),
  "border-width" :"2px",
})

</script>




<template>
<div class="categoryCard" :style="styleObject">


  <p>{{ props.expense.description }}</p>
  <p>{{formattedAmount }}</p>
  <p>{{ props.expense.date }}</p>
</div>
</template>