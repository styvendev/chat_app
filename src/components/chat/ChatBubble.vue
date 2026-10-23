<template>
<!-- Example Sent Message -->
<div v-if="isSentByUser" class="flex justify-end">
  <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
    <p>{{ text }}</p>
  </div>
</div>

<!-- Example Received Message -->
<div v-else class="flex">
  <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
    <p>{{ text }}</p>
    <img :src="imageUrl" alt="Yes or Not Image" class="my-2 rounded-lg object-cover w-60 h-60" />
  </div>
</div>
</template>

<script lang="ts" setup>
interface props {
  text: string;
  isSentByUser: boolean;
  imageUrl?: string;
}
defineProps<props>();
</script>
