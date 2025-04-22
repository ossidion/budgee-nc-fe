import { getCategories, getExpenses } from "@/api/requests";
import { defineStore } from "pinia";

export const expenseStore = defineStore('expenses', {
  state: () => ({
    categories: [],
    expenses: []
  }),
  actions: {
    async getCategories() {
      try {
        const categories = await getCategories()
        console.log('categories fetched', categories)
        this.categories = categories
      } catch (error) {
        console.error('failed to fetch categories', error)
      }
    },
    async fetchExpensesFromApi() {   // RENAMED to avoid confusion
      try {
        const expenses = await getExpenses()
        console.log('expenses fetched', expenses)
        this.expenses = expenses
      } catch (error) {
        console.error('failed to fetch expenses', error)
      }
    }
  }
})
