<template>
  <div
    class="w-full border-t border-gray-700 px-5 h-1/5 flex justify-around relative"
  >
    <input
      type="text"
      class="outline-none h-3/6 bg-transparent border border-gray-700 my-auto text-gray-400 p-4 w-3/6 rounded-md"
      v-model="messageText"
      placeholder="Write a message..."
    />
    <small v-if="error" class="text-red-400 absolute left-[14%]"
      >Message can't be empty</small
    >
    <button
      @click="submitMessage"
      class="h-3/6 my-auto w-24 bg-white text-black rounded-2xl"
    >
      Submit
    </button>
  </div>
</template>

<script setup lang="ts">
import { db, auth } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "@firebase/firestore";
import { ref } from "vue";

const messageText = ref("");
const error = ref(false);

const submitMessage = async () => {
  if (!messageText.value) {
    error.value = true;
    setTimeout(() => (error.value = false), 2000);
    return;
  }
  const scrollHelper = document.getElementById("scroll-helper");
  const docRef = await addDoc(collection(db, "messages"), {
    text: messageText.value,
    timestamp: serverTimestamp(),
    uid: auth.currentUser?.uid,
    photoURL: auth.currentUser?.photoURL,
    displayName: auth.currentUser?.displayName,
  });

  console.log(docRef.id);

  messageText.value = "";
  scrollHelper?.scrollIntoView({ behavior: "smooth" });
};
</script>
