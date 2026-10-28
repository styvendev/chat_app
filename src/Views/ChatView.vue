<template>
  <!-- chat -->
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-400 p-4 text-white">
      <span class="font-medium">Chat App</span>
    </div>
    <div class="bg-gray-200 p-4 text-gray-500">
      <span>Realiza cualquier pregunta, el chat te respondera con si o no.</span>
      <p>Las preguntas deben finalizar con signo de interrogacion (?)</p>
    </div>
    <!-- message list -->
    <ChatMessages :messages="messages"/>
    <!-- message input -->
    <MessageBox @send-message="onMessage"/>
  </div>
</template>

<script lang="ts" setup>
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import { useChat } from '@/composables/useChat';

const { messages, onMessage } = useChat()
</script>
