import {defineStore} from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    id: null,
    username: "",
    name: "",
    email: "",
    avatar: "",
    preferences: [],
  }),
  getters: {
    isLoggedIn: (state) => !!state.username,
    fullName: (state) => state.name,
    preferredCurrency: (state) =>
      state.preferences.find((p) => p.startsWith("currency"))?.split("=")[1] ||
      "GBP",
  },
  actions: {
    setUser(userData) {
      this.id = userData._id;
      this.username = userData.username;
      this.name = userData.name;
      this.email = userData.email;
      this.avatar = userData.avatar;
      this.preferences = userData.preferences || [];
    },
    clearUser() {
      this.id = null;
      this.username = "";
      this.name = "";
      this.email = "";
      this.avatar = "";
      this.preferences = [];
    },
  },
  persist: true,
});

