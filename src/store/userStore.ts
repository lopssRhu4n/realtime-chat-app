import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const isAuth = ref(false);

  function changeAuth(value: boolean) {
    isAuth.value = value;
  }

  return { isAuth, changeAuth };
});
