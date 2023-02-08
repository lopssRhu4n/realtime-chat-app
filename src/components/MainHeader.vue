<template>
  <header
    class="w-full row-span-1 border-b flex justify-between px-4 items-center border-b-gray-700"
  >
    <nav>
      <img
        src="../assets/images/favicon-32x32.png"
        alt="Logo with word Chat"
        class="w-12 h-12"
      />
    </nav>

    <h1 class="text-lg text-center md:text-3xl text-white">
      Chat with anyone, anywhere!
    </h1>

    <button
      v-if="store.isAuth"
      class="h-12 w-20 rounded-2xl bg-white justify-self-end"
      @click="logout"
    >
      Logout
    </button>

    <button
      @click="login"
      v-else
      class="h-12 w-20 rounded-2xl bg-white justify-self-end"
    >
      Login
    </button>
  </header>
</template>

<script setup lang="ts">
import { auth, provider } from "@/firebase";
import { signOut, signInWithPopup } from "@firebase/auth";
import { useUserStore } from "@/store/userStore";

const store = useUserStore();

const login = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const logout = () => {
  signOut(auth)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
