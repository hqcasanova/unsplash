<template>
  <slot />
  <div ref="bottomEl" />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

export type Props = {
  root?: Element | null,
  rootMargin?: string,
}
export type Emits = {
  (e: 'bottom'): void,
}

const props = withDefaults(defineProps<Props>(), {
  root: null,
  rootMargin: '',
});
const emit = defineEmits<Emits>();

const observer = ref<IntersectionObserver | null>(null);
const bottomEl = ref<Element | null>(null);

onMounted(() => {
  observer.value = new IntersectionObserver((elements) => {
    if (elements[0].isIntersecting) {
      emit('bottom');
    }
  }, props);

  observer.value.observe(bottomEl.value as Element);
});

onUnmounted(() => {
  observer.value?.disconnect(); // eslint-disable-line no-unused-expressions
});
</script>
