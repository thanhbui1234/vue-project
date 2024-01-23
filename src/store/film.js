import { createPinia, defineStore } from "pinia";
const pinia = createPinia();
export const useApiStore = defineStore("apiStore", {
  state: () => ({
    datas: [],
    loading: false,
  }),
});
