<template>
  <!-- chat -->
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span class="font-medium">Chat App</span>
    </div>
    <!-- message list -->
    <ChatMessages :messages="mesagges"/>
    <!-- message input -->
    <MessageBox />
  </div>
</template>

<script lang="ts" setup>
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

const mesagges = ref<ChatMessage[]>([
  {
    id: 1,
    text: 'Quieres comer?',
    isSentByUser: true,
  },
  {
    id: 2,
    text: 'Yes!',
    isSentByUser: false,
    imageUrl: 'https://yesno.wtf/assets/yes/7-653c8ee5d3a6bbafd759142c9c18d76c.gif'
  }
])
</script>
