<template>
<!-- Example Sent Message -->
<div v-if="isSentByUser" class="flex justify-end">
  <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
    <p>{{ text }}</p>
  </div>
</div>

<!-- Example Received Message -->
<div v-else class="flex">
    <div v-if="isloading" class="bg-gray-300 text-gray-500 p-2 rounded-lg max-w-xs">
    <p>...</p>
  </div>
  <div v-else class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
    <p>{{ text }}</p>
    <img v-if="imageUrl" :src="imageUrl" alt="Yes or Not Image" class="my-2 rounded-lg object-cover w-60 h-60" />
  </div>
</div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

interface Props {
  text: string;
  isSentByUser: boolean;
  imageUrl?: string;
}
defineProps<Props>();

const isloading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isloading.value = false
  },500)
})
</script>
