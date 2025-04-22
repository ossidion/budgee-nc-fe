<script setup>
import { getCategories, getColours, getExpenses, PLACEHOLDER_GET_CURR_BUDGET } from '@/api/requests';
import PieChart from './PieChart.vue';
import { useColourStore } from './assets/stores/colourStore';

import { useStore } from './assets/stores/currentBudgetData';
import { generateCategoryData, generateColorData, generateCurrentBudget, generateExpenseData } from '@/utils/testData';




let categoryData = []
let budgetStore = useStore()
let colorStore = useColourStore()
let colorData = [];


getColours()
.then((colorData)=>{
    colorData = colorData;
    colorStore.$patch({colourPalette:colorData})
    return PLACEHOLDER_GET_CURR_BUDGET()
})
.then((budgetData) => {
    budgetStore.$patch({budget:budgetData})
    return getCategories()
})
.then((res) => {
    categoryData = res
    return getExpenses()
})
.then((expensesData) => {
    console.log(expensesData)
    console.log(categoryData)
    const category_ids = categoryData.map((cat) => cat._id)

    categoryData.forEach((cat) => cat.expenses = [])
    

    for (let expense of expensesData) {
        const index = category_ids.indexOf(expense.category_id)
        if (index === -1) {
            return Promise.reject({msg:"no cat found"})
        }

        categoryData[index].expenses.push(expense)
    }
    
    budgetStore.$patch({categories:categoryData})
    
    })
    .then(() => {

    })
    .catch((err) => {
        console.log(err)
    })



</script>

<template>
    <div id="bodyDiv">
        <PieChart />
        <router-view id="routedComponent"></router-view>
        
    </div>
</template>

<style scoped>
#bodyDiv {
    display: flex;
    align-items: center;
    flex-direction: column;


}
#routedComponent {

    overflow: scroll;
    height: 300px;
    width: 100%;

}

</style>