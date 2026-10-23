<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">

      <ChatBubble
        v-for="message in messages"
        :key="message.id"
        v-bind="message"
      />
      <!-- <ChatBubble
        v-for="message in messages"
        :key="message.id"
        :text="message.text"
        :isSentByUser="message.isSentByUser"
        :imageUrl="message.imageUrl"
      /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ChatMessage } from '@/interfaces/chat-message.interface.ts';
import ChatBubble from './ChatBubble.vue';

interface porps {
  messages: ChatMessage[]
}
defineProps<porps>();
</script>
