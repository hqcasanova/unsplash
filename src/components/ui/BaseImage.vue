<template>
  <figure class="base-image">
    <div
      class="base-image__container"
      role="img"
      :aria-label="ariaLabel"
      :style="{ backgroundImage: `url(${url})` }"
    />
    <figcaption class="base-image__author">
      <a
        v-if="userUrl"
        class="padded primary-link"
        :href="userUrl"
      >
        {{ username }}
      </a>
      <span
        v-else
        class="padded"
      >
        {{ username }}
      </span>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
const props = defineProps<{
  url: string,
  ariaLabel: string,
  username: string,
  userUrl: string,
}>();
</script>

<style scoped lang="scss">
.base-image {
  &__container {
    min-height: 10em;
    background: center center / cover no-repeat transparent;
  }
}
</style>
