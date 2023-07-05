<template>
  <figure class="base-image">
    <div
      class="base-image__container"
      role="img"
      :aria-label="alt"
      :style="{ backgroundImage: `url(${url})` }"
    />
    <figcaption class="base-image__caption padded">
      {{ title }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export type Props = {
  url: string,
  alt: string,
  description: string,
  username: string,
  userUrl: string,
}

const props = defineProps<Props>();

const title = computed(() => {
  if (props.description.length < props.alt.length) {
    return props.description || props.alt;
  }

  return props.alt || props.description;
});
</script>

<style scoped lang="scss">
.base-image {
  &__container {
    min-height: 10em;
    background: center center / cover no-repeat transparent;
  }

  &__caption {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:first-letter {
      text-transform: uppercase;
    }
  }
}
</style>
