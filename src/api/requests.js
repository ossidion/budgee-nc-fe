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

getExpenses()
getCategories()