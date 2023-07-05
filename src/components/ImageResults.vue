<template>
  <section class="image-results">
    <detect-bottom
      v-if="hasImages"
      :root-margin="infiniteThreshold"
      @bottom="nextPage"
    >
      <image-grid
        class="image-results__grid"
        empty-message="No images found"
        :images="(images as any[])"
      />
    </detect-bottom>

    <div
      v-else-if="error && query.length"
      class="image-results__error"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        viewBox="0 0 1000 1000"
        class="danger-text"
        fill="currentColor"
        stroke="currentColor"
      >
        <!-- eslint-disable max-len -->
        <path d="M500 10C229.8 10 10 229.8 10 500s219.8 490 490 490 490-219.8 490-490S770.2 10 500 10zm0 953.5c-255.6 0-463.5-208-463.5-463.5S244.4 36.5 500 36.5 963.5 244.4 963.5 500 755.6 963.5 500 963.5z" />
        <path d="M500 615.9c-13.6 0-24.6-11-24.6-24.6v-309c0-13.6 11-24.6 24.6-24.6 13.6 0 24.6 11 24.6 24.6v308.9c.1 13.6-11 24.7-24.6 24.7zM467 709.4c0 18.2 14.8 33 33 33s33-14.8 33-33-14.8-33-33-33-33 14.8-33 33z" />
        <!-- eslint-enable max-len -->
      </svg>
      <p>{{ error }}</p>
    </div>

    <div
      v-else
      class="image-results__feedback"
    >
      Type in above the name of an image
    </div>
  </section>
</template>

<script setup lang="ts">
import useSearch from '@/composables/useSearch';
import ImageGrid from '@/components/ImageGrid.vue';
import DetectBottom from './ui/DetectBottom.vue';

export type Props = {
  infiniteThreshold?: string,
}

const props = withDefaults(defineProps<Props>(), {
  infiniteThreshold: JSON.parse(process.env.VUE_APP_INFINITE_THRESHOLD),
});

const {
  nextPage,
  query,
  images,
  error,
  hasImages,
} = useSearch();
</script>

<style scoped="scss">
.image-results__error svg {
  height: 2em;
  stroke-width: 2em;
}
</style>
