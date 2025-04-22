<script setup>
import { ref, computed, onMounted } from 'vue'
import CategoryList from './CategoryList.vue'
import { expenseStore } from './assets/stores/categoriesStore'




const myExpenseStore = expenseStore();

const selectedCurrency = ref('GBP')
const newCategoryName = ref('')
const isAdding = ref(false)

const currencyLocales = {
  GBP: 'en-GB',
  USD: 'en-US',
  EUR: 'de-DE',
  JPY: 'ja-JP',
}

const selectedLocale = computed(() => currencyLocales[selectedCurrency.value])
onMounted(async () => {
  await myExpenseStore.getCategories()
  await myExpenseStore.fetchExpensesFromApi()

  const categoryWithExpenses = myExpenseStore.categories.map(cat => ({
    ...cat,
    category_id: cat._id,
    expenses: []
  }));

  for (const expense of myExpenseStore.expenses) {
    const cat = categoryWithExpenses.find(singleCat => singleCat._id === expense.category_id);
    if (cat) {
      cat.expenses.push(expense);
    }
  }
})


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
      :categories="myExpenseStore.categories"
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
        

     <footer>
      <Nav></Nav>
     </footer>

</template>

<style scoped></style>