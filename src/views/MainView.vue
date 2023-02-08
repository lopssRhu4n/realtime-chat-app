<script setup lang="ts">
import { auth } from "@/firebase";
import { useUserStore } from "@/store/userStore";
import { onAuthStateChanged } from "@firebase/auth";
import ChatComponent from "@/components/ChatComponent.vue";
import { onMounted } from "vue";

const store = useUserStore();
onMounted(() => {
  const mainParts = document.querySelectorAll("main");
  console.log(mainParts);
  mainParts.forEach((main) => main.classList.add("hidden"));

  onAuthStateChanged(auth, () => {
    if (auth.currentUser) {
      store.changeAuth(true);
      return;
    }
    store.changeAuth(false);
  });
});
</script>

<template>
  <ChatComponent v-if="store.isAuth" />
  <main
    v-else
    class="flex items-center justify-center row-span-5 w-full h-full"
  >
    <h1 class="text-center text-2xl text-purple-600">
      Login to send messages!
    </h1>
  </main>
</template>
