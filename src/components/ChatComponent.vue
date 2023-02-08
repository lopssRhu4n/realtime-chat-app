<template>
  <main
    class="border-gray-700 rounded-md mt-5 text-white w-full row-span-5 flex-col gap-3 mx-auto flex justify-center items-center"
  >
    <div class="h-4/5 gap-4 overflow-y-auto w-full px-4 py-2 flex flex-col">
      <div v-for="(message, key) in messages" :key="key">
        <div
          v-if="auth.currentUser?.uid == message.uid"
          class="flex max-w-[70%] ml-[30%] justify-end"
        >
          <p class="py-4 px-4 rounded-2xl bg-[#4E38A1]">{{ message.text }}</p>

          <img
            :src="(message.photoURL as string)"
            :alt="`${message.displayName} icon`"
            class="h-7 w-7 rounded-full ml-3"
          />
        </div>
        <div v-else class="flex max-w-[70%]">
          <img
            :src="(message.photoURL as string)"
            :alt="`${message.displayName} icon`"
            class="h-7 w-7 rounded-full mr-3"
          />
          <p class="py-4 px-4 rounded-2xl bg-[#19182B] text-gray-400">
            {{ message.text }}
          </p>
        </div>
      </div>
      <div class="w-0 h-0" id="scroll-helper"></div>
    </div>
    <ChatMessageSubmit />
  </main>
</template>

<script setup lang="ts">
import ChatMessageSubmit from "./ChatMessageSubmit.vue";
import { auth, db } from "@/firebase";
import {
  query,
  limit,
  orderBy,
  onSnapshot,
  collection,
} from "@firebase/firestore";
import { onMounted, ref } from "vue";
import type { Ref } from "vue";
const messagesQuery = query(
  collection(db, "messages"),
  orderBy("timestamp", "asc"),
  limit(25)
);
const messages: Ref<any[]> = ref([]);

onMounted(() => {
  console.log(auth.currentUser?.photoURL);
  onSnapshot(messagesQuery, (querySnapshot) => {
    let dataMessages: any[] = [];

    querySnapshot.forEach((doc) => {
      dataMessages.push(doc.data());
    });

    messages.value = dataMessages;
  });
});
</script>
