<template>
  <div :class="['app-header__progress', {'app-header__progress--loading': isLoading}]"></div>

  <header>
    <h1 class="app-header__title">
      <span class="primary-text">Splashed</span>&nbsp;
      <span class="primary-outlined">Unsplash</span>
    </h1>

    <p class="app-header__source">
      Check the
      <a
        class="primary-link"
        target="_blank"
        href="https://github.com/hqcasanova/unsplash"
      >
        source here
      </a>
    </p>
  </header>

  <nav class="app-header__nav app-header__nav--sticky">
    <base-search
      v-model="query"
      class="app-header__search rounded white-bg"
      placeholder="Search for photos..."
      @update:modelValue="error && firstPage()"
    />
  </nav>
</template>

<script setup lang="ts">
import BaseSearch from '@/components/ui/BaseSearch.vue';
import useSearch from '@/composables/useSearch';
import { watch } from 'vue';

export type Props = {
  initQuery?: string,
}

const props = withDefaults(defineProps<Props>(), {
  initQuery: '',
});
const {
  firstPage,
  query,
  error,
  isLoading,
} = useSearch(props.initQuery);

watch(query, firstPage);
</script>

<style scoped lang="scss">
.app-header {
  @import "@/scss/mixins.scss";

  &__progress {
    z-index: 10;
    position: fixed;
    top: 0;
    height: calc($base-spacing / 2);
    width: 100%;
    background: transparent;

    &--loading {
      @include progress-bar($primary);
    }
  }

  &__source {
    margin: #{$base-spacing * 3} auto 0;
  }

  &__nav {
    padding: #{$base-spacing * 3} 0;
    background: $light-grey;

    &--sticky {
      position: sticky;
      top: 0;
    }
  }

  &__search {
    width: 100%;
    max-width: 500px;
  }
}
</style>
