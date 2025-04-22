import { defineStore } from "pinia";


export const useSettings = defineStore("budgetData", {
    state: () => {
        return { locale : "en-GB", currency : "GBP"};
      },
    
});