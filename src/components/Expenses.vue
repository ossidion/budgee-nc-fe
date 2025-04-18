<script setup>
import { ref, computed } from 'vue'
import CategoryList from './CategoryList.vue'
import { useStore } from './assets/stores/currentBudgetData'

let budgetStore = useStore()

const categories = budgetStore.getCategories

const selectedCurrency = ref('GBP')
const newCategoryName = ref('')
const isAdding = ref(false)

const currencyLocales = {
  GBP: 'en-GB',
  USD: 'en-US',
  EUR: 'de-DE',
  JPY: 'ja-JP',
}

//computed property — a core Vue feature that creates reactive derived state
const selectedLocale = computed(() => currencyLocales[selectedCurrency.value])

</script>

<template>
    <p> Expenses </p>
     <!-- Currency dropdown -->
    <div>
      <label for="currency">Currency</label>
      <select id="currency" v-model="selectedCurrency">
        <option value="GBP">GBP (£)</option>
        <option value="USD">USD ($)</option>
        <option value="EUR">EUR (€)</option>
        <option value="JPY">JPY (¥)</option>
      </select>
    </div>
    <!-- List -->
    <CategoryList
      :categories="categories"
      :currency="selectedCurrency"
      :locale="selectedLocale"
    />
    <!-- Add category input or button -->
     <div v-if="isAdding">
      <input
        v-model="newCategoryName"
        @keyup.enter="confirmAddCategory"
        placeholder="Enter category name"
      />

      <button @click="confirmAddCategory">Save</button>
     </div>
        

</template>

<style scoped></style>