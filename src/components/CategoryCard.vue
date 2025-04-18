<script setup>
// declare the props 
import { useCurrencyFormatter } from '@/utils/useCurrencyFormatter';
import { toRef } from 'vue'

const props=  defineProps({
  name: String,
  amount: Number,
  percentage: Number,
  currency: {
    type: String,
    default: 'GBP',
  },
  locale: {
    type: String,
    default: 'en-GB',
  }
})

// Intl.NumberFormat is a built-in JavaScript object 
// which formats numbers according to a specific locale and style
  const amountRef = toRef(props,'amount')
  const currencyRef = toRef(props,'currency')
  const localeRef = toRef(props,'locale')
  
  const formattedAmount = useCurrencyFormatter(amountRef,currencyRef,localeRef)
</script>

<template>
    <div>
        <div>
            <span>{{ name }}</span>
            <span>{{ percentage }}%</span>
        </div>
        <span>{{ formattedAmount }}</span>
    </div>
</template>