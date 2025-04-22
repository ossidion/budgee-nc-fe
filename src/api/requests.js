import axios from "axios";

const api = axios.create({
  baseURL: "https://budgee-be-amq3.onrender.com/api/",
});



export const getExpenses = () => {
  return api.get("/expenses").then(({ data }) => {
    //console.log(data, "Expenses")
    return data;
  });
};

export const getExpensesByCategoryId = (category_id) => {
  return api.get(`/expenses/category/${category_id}`).then(({ data :{expenses}}) => {
   // console.log( expenses,"Expenses By CategoryId")
    return expenses;
  });
};
export const getExpensesByBudgetIdCategoryId = (budget_id,category_id) => {
  return api.get(`/expenses/${budget_id}/${category_id}`).then(({ data :{expenses}}) => {
    //console.log( expenses,"Expenses By budget_id and Category_id")
    return expenses;
  });
};

export const getCategories = () => {
  return api.get("/categories").then(({ data: { categories } }) => {
    //console.log(categories, "Categories")
    return categories;
  });
};
// export const getCategoryById = () => {
//   return api.get("/categories").then(({ data: { categories } }) => {
//     //console.log(categories, "Categories")
//     return categories;
//   });
// };

export const getUsers =()=>{
  return api.get("/users").then(({data:{users}})=>{
   //console.log(users,"users")
    return users
  })
}
export const getUserById = (user_id) => {
  return api.get(`/users/${user_id}`).then(({ data :{user}}) => {
    //console.log(user, "user by Id")
    return user;
  });
};
export const getBudgetsByUser =(username)=>{
  return api.get(`/${username}/budgets`).then(({data:{budgetsByUser}})=>{
    //console.log(budgetsByUser,"budgetsByUser")

    return budgetsByUser
  })
}

export const getBudgets =()=>{
  return api.get("/budgets").then(({data:{allBudgets}})=>{
    //console.log(allBudgets,"budgets")
    return allBudgets
  })
}
export const getBudgetsById =(id)=>{
  return api.get(`/budgets/${id}`).then(({data:{budget}})=>{
  // console.log(budget,"budgetsById")
    return budget
  })
}
export const modifyBudgets =(_id,budget,start_date,end_date)=>{
  return api.patch(`/budgets/${_id}`,{budget:budget,start_date:start_date,end_date:end_date}).then(({data})=>{
  //console.log(data,"data")
    return data
  })
}

export const getColours =()=>{
  return api.get("/colours").then(({data:{colours}})=>{
   //console.log(colours,"colours")
    return colours
  })
}



getExpenses()
getExpensesByCategoryId("68023d7a0f29a6af39654cef")
getExpensesByBudgetIdCategoryId("68023d7b0f29a6af39654cfe","68023d7a0f29a6af39654cef")
getCategories()
//getCategoryById("")
getUsers()
getUserById("68023d7b0f29a6af39654cf9")
getBudgets()
getBudgetsById("68023d7b0f29a6af39654d00")
modifyBudgets("68023d7b0f29a6af39654cff","2024-04-31","2024-05-29")
getBudgetsByUser("123James")
getColours()



