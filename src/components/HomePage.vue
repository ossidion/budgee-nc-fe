<script setup>

    import { ref } from 'vue'
    import Nav from './Nav.vue'
    import 'tailwindcss';
    import { useStore } from './assets/stores/currentBudgetData';
    import { computed } from 'vue';
    import ColourPreview from './ColourPreview.vue';
        

    let budgetStore = useStore()

    
    const getInitialData = () => ({ costOfExpense: "", newCategory: "", existingCategory: undefined, newTotalBudget: "", budgetForm: false, expenseForm: false });
    
    const formData = ref(getInitialData())
    
    const optimisticMessage = ref("")

    const budget = computed(() => {
        return budgetStore.budget.budget
    })
    
    const showChangeBudgetForm = () => {
        if (formData.value.expenseForm) formData.value.expenseForm = !formData.value.expenseForm
        formData.value.budgetForm = !formData.value.budgetForm
    }

    const showExpenseForm = () => {
        if (formData.value.budgetForm) formData.value.budgetForm = !formData.value.budgetForm
        formData.value.expenseForm = !formData.value.expenseForm
    }
    
    const updateTotalBudget = (newTotalBudget) => {
        budgetStore.changeBudget(Number(newTotalBudget))
        formData.value.newTotalBudget = ""
        showChangeBudgetForm()
    }

    const addCategory = (newCategory) => {
        budgetStore.addCategory(newCategory)
    }

    const addNewExpense = (existingCategory, costOfExpense, newCategory) => {
        if (newCategory) {
            addCategory(newCategory)
            budgetStore.addExpense(costOfExpense, budgetStore.categories.length - 1)
            optimisticMessage.value = `£${costOfExpense} successfully added to ${newCategory}!`
            showExpenseForm()
            formData.value.costOfExpense = ""
            formData.value.newCategory = ""
        } else {       
        budgetStore.addExpense(costOfExpense, existingCategory.key)
        optimisticMessage.value = `£${costOfExpense} successfully added to ${existingCategory.item}!`
        showExpenseForm()
        formData.value.costOfExpense = ""
        formData.value.newCategory = ""
        formData.value.existingCategory = undefined
        }
    }

</script>


<template>
    <!-- <ColourPreview/> -->
    <br><br/>

    <section>
        <div class="home-page-buttons">
    
            <!-- Add Expense Button -->
            <button class= "home-page-button" @click="showExpenseForm()">
                Add Expense
            </button>
    
            <!-- Change Budget Button-->
            <button class= "home-page-button" @click="showChangeBudgetForm()">
                Change budget
            </button><br><br>
        </div>

        <!-- Add Expense Form -->
         <form class="form" v-if="formData.expenseForm" v-on:submit.prevent>
            <div class="form-div relative">
                <input class="custom-input" name="floting-input" v-model.number="formData.costOfExpense" type="text" placeholder=" ">
            
                <label for="floating-input" class="custom-label">Cost of Expense</label>
            </div><br>

            <p v-for="item, key in budgetStore.getCatNames">
                <input type="radio" v-model="formData.existingCategory" :value="{key, item}">
                <label for="category">{{ item }}</label><br>
            </p>
            
            <div class="form-div relative">
            <input class="custom-input" type="text" name="floting-input" v-model="formData.newCategory" placeholder=" "></input>

            <label for="floating-input" class="custom-label">New Category</label>

            </div>
            <button class="home-page-button" v-on:click="addNewExpense(formData.existingCategory, formData.costOfExpense, formData.newCategory)">Save</button>
        </form>

        <!-- Change Budget Form -->
        <form class="form" v-if="formData.budgetForm" v-on:submit.prevent>
            <!-- New Total Budget -->
            <div class="form-div relative">
                <input class="custom-input" name="floating-input" v-model.number="formData.newTotalBudget" type="text" placeholder=" ">
                <label for="floating-input" class="custom-label">New Total Budget</label>

            </div>
            <button class="home-page-button" v-on:click="updateTotalBudget(formData.newTotalBudget)">Save</button><br>

            <!-- Update Available Funds -->
             <br>
        </form>

        <p class="opt-mes">{{ optimisticMessage }}</p>

    </section>

    <section>
        <br><br>
        <Nav />
    </section>

</template>

<style scoped>

@import "tailwindcss";

.opt-mes {
    text-align: center;
}

.budget {
  z-index: 100;
  position: absolute;
  top: 26%;
  left: 38%;
}

.budget-block {
    display: block;
    text-align: center;
}

.home-page-buttons {
  display: flex;
  align-items: center;
}
.home-page-button {
    margin:1rem;
    background-color: #0f87f7;
    color: white;
    font-weight: bold;
    padding: 0.5rem;
    border-radius: calc(infinity * 1px);
    text-align: center;
    justify-content: center;
}

.home-page-button:hover {
    background-color: #0c5eda;
}

.form {
    max-width: var(--container-md);
}

.form-div {
    z-index: 0;
    width: full;
    margin-bottom: 5px;
}

.custom-input {
  display: block;
  padding-top: 0.625rem; 
  padding-bottom: 0.625rem;
  padding-left: 0;
  padding-right: 0;
  width: 100%;
  font-size: 0.875rem; 
  color: #ffffff;       
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #d1d5db;
  appearance: none;
  outline: none;
}

.custom-input:focus {
  border-bottom-color: #2563eb; 
  box-shadow: none;
}

.dark .custom-input {
  color: #ffffff;          
  border-bottom-color: #4b5563; 
}

.dark .custom-input:focus {
  border-bottom-color: #3b82f6; 
}

.custom-label {
  position: absolute;
  font-size: 0.875rem; 
  color: #6b7280; 
  top: 0.75rem;
  left: 0;
  z-index: -10;
  transform-origin: 0 0;
  transition: all 0.3s;
  transform: scale(1) translateY(0);
}

.custom-input:focus ~ .custom-label,
.custom-input:not(:placeholder-shown) ~ .custom-label {
  font-weight: 500;
  transform: scale(0.75) translateY(-1.5rem);
  color: #2563eb;
}

.dark .custom-label {
  color: #9ca3af; 
}

.dark .custom-input:focus ~ .custom-label,
.dark .custom-input:not(:placeholder-shown) ~ .custom-label {
  color: #3b82f6;
}

</style>