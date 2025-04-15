<script setup>
import PieChart from './PieChart.vue';

import { useStore } from './assets/stores/currentBudgetData';
import { generateCategoryData, generateExpenseData } from '@/utils/testData';

let categoryData = []
let budgetStore = useStore()



generateCategoryData(5)
    .then((res) => {
        categoryData = res
        return generateExpenseData(categoryData, 500)
    })
    .then((expensesData) => {
        const category_ids = categoryData.map((cat) => cat.category_id)
        categoryData.forEach((cat) => cat.expenses = [])

        for (let expense of expensesData) {
            const index = category_ids.indexOf(expense.category_id)
            if (index === -1) {
                return Promise.reject()
            }
            categoryData[index].expenses.push(expense)
        }
        budgetStore.$patch({categories:categoryData})
    })
    .then(() => {

        console.log(budgetStore.getCategories)
    })
    .catch((err) => {
        console.log(err)
    })



</script>

<template>
    <div id="bodyDiv">
        <PieChart />
        <router-view></router-view>
    </div>
</template>

<style scoped>
#bodyDiv {
    display: flex;
    align-items: center;
    flex-direction: column;


}
</style>