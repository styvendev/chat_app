<template>
  <section class="text-center m-5">
    <h3 class="text-lg">Valor {{ count }}</h3>
    <h3 class="text-lg">Cuadrado {{ squared }}</h3>
    <!-- v-on:click -->
    <button class="btn" @click="count++">+1</button>
    <button class="btn" @click="count--">-1</button>
  </section>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const count = ref(props.value);
    const squared = computed(() => count.value * count.value);

    return {
      count,
      squared,
    };
  },
});
</script>
