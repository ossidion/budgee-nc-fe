import { defineStore } from "pinia";

export const setCategories = () => {
  const category_ids = categoryData.map((cat) => cat.category_id);
  categoryData.forEach((cat) => (cat.expenses = []));

  for (let expense of expensesData) {
    const index = category_ids.indexOf(expense.category_id);
    if (index === -1) {
      return Promise.reject();
    }
    categoryData[index].expenses.push(expense);
  }
};

export const useStore = defineStore("budgetData", {
  state: () => {
    return { categories: [] };
  },
  // could also be defined as
  //  state: () => ({ count: 0 })

  actions: {
    addExpense() {
      console.log("placeholder");
    },
  },
  getters: {
    getCategories: (state) => {
      const newCategories = state.categories.map((cat) => {
        const newCat = { ...cat };
        newCat.amount =
          Math.round(
            100 *
              newCat.expenses.reduce((acc, curr) => {
                return acc + curr.amount;
              }, 0)
          ) / 100;
        delete newCat.expenses;
        return newCat;
      });
      const totalSpend = newCategories.reduce(
        (acc, curr) => acc + curr.amount,
        0
      );
      newCategories.forEach(
        (cat) =>
          (cat.percentage = Math.round((cat.amount / totalSpend) * 10000) / 100)
      );
      return newCategories;
    },
    getCatNames: (state) => {
      return (state.categories.map((cat) => {
        return cat.name;
      }));
    },
    getCatAmounts: (state) => {
      return (state.categories.map((cat) => {
        return  Math.round(
          100 *
            cat.expenses.reduce((acc, curr) => {
              return acc + curr.amount;
            }, 0)
        ) / 100;
      }));
    },
    getCatPieData: (state)=>{
      return {
        labels: (state.categories.map((cat) => {
          return cat.name;
        })),
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#DD3B16'],
            data: (state.categories.map((cat) => {
              return  Math.round(
                100 *
                  cat.expenses.reduce((acc, curr) => {
                    return acc + curr.amount;
                  }, 0)
              ) / 100;
            }))
          }
        ]
      }
    }
  },
});
