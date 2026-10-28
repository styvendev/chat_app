<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
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
import { ref, watch } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface.ts';
import ChatBubble from './ChatBubble.vue';

interface Props {
  messages: ChatMessage[]
}
const props = defineProps<Props>()

const chatRef = ref<HTMLDivElement|null>(null)

watch( props.messages, () => {
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'auto',
    })
  }, 1000)
})
</script>
