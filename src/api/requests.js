import axios from "axios";

const api = axios.create({
  baseURL: "https://budgee-be-amq3.onrender.com/api/",
});


export const getExpenses = () => {
  return api.get("/expenses").then(({ data:{allExpenses} }) => {
    console.log(allExpenses)
    return allExpenses;
  });
};
export const getCategories = () => {
  return api.get("/categories").then(({ data: { categories } }) => {
    console.log(categories, "Categories")
    return categories;
  });
};
export const getUsers =()=>{
  return api.get("/users").then(({data:{users}})=>{
   console.log(users,"users")
    return users
  })
}
export const getBudgetsByUser =(username)=>{
  return api.get(`/${username}/budgets`).then((data)=>{

    return data
  })
}

export const getBudgets =()=>{
  return api.get("/budgets").then(({data:{allBudgets}})=>{
    return allBudgets
  })
}
export const getColours =()=>{
  return api.get("/colours").then(({data:{colours}})=>{
   console.log(colours,"colours")
    return colours
  })
}

export const PLACEHOLDER_GET_CURR_BUDGET= ()=>{
  return getBudgets().then((allBudgets)=>{
    return allBudgets.at(-1)
  })
}


// getExpenses()
// getCategories()
// getUsers()
getBudgets()
// getColours()
//getBudgetsByUser('Lunahen78')
// PLACEHOLDER_GET_CURR_BUDGET().then((budget)=>{
//   console.log(budget)
// })