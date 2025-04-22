import axios from "axios";

const api = axios.create({
  baseURL: "https://budgee-be-amq3.onrender.com/api/",
});


export const getExpenses = () => {
  return api.get("/expenses").then(({ data }) => {
    console.log(data, "Expenses")
    return data;
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
    console.log(budgetsByUser,"budgetsByUser")
    console.log(data,"data")

    return data
  })
}

export const getBudgets =()=>{
  return api.get("/budgets").then(({data:{allBudgets}})=>{
    console.log(allBudgets,"budgets")
    return allBudgets
  })
}
export const getColours =()=>{
  return api.get("/colours").then(({data:{colours}})=>{
   console.log(colours,"colours")
    return colours
  })
}


getExpenses()
getCategories()
getUsers()
getBudgets()
getColours()
getBudgetsByUser()