<template>
  <div class="image-grid">
    <span v-if="isEmpty">
      {{ emptyMessage }}
    </span>

    <template v-else>
      <base-image
        v-for="image in images"
        :key="image.id"
        class="primary-bg"
        :aria-label="image.description"
        :url="image.url"
        :username="image.username"
        :user-url="image.userUrl"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import BaseImage from '@/components/ui/BaseImage.vue';

export type Props = {
  images: any[],
  emptyMessage?: string,
}

const props = withDefaults(defineProps<Props>(), {
  emptyMessage: 'No images',
});
const isEmpty = computed(() => props.images.length === 0);
</script>

<style scoped lang="scss">
.image-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
