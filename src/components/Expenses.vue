<script setup>
import { ref, computed, onMounted } from 'vue'
import CategoryList from './CategoryList.vue'
import { expenseStore } from './assets/stores/categoriesStore'




let budgetStore = useStore()


const myExpenseStore = expenseStore();

const newCategoryName = ref('')
const isAdding = ref(false)


function startAdding(){
  isAdding.value = true
  newCategoryName.value = ''
}

function confirmAddCategory(){
  if(newCategoryName.value.trim()){
    categories.value.push({
      name: newCategoryName.value.trim(),
      amount: 0,
      percentage: 0,
    })
    newCategoryName.value = ''
    isAdding.value = false

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
    <div>

    <!-- List -->
    <CategoryList

      :categories="categories"
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
        

    </div>
</template>

<style scoped></style>