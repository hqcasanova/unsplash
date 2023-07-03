<template>
  <h1>
    <span class="primary-text">Splashed</span>
    Unsplash
  </h1>
  <image-search />
</template>

<script setup lang="ts">
import ImageSearch from '@/components/ImageSearch.vue';
</script>

<style lang="scss">
@import '@/scss/mixins.scss';

/* RESET */
*, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

button {
  padding: 0;
  font-family: inherit;
  color: inherit;
  border: none;
  background: none;
  cursor: pointer;
}

input, button {
  font: inherit;
}

a {
  text-decoration: none;
}

body {

  /* TYPOGRAPHY */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 100%;
  color: $black;

  h1, h2, h3 {
    font-family: Georgia, Times, "Times New Roman", serif;
  }

  /* APP STYLES */
  main {
    display: flex;
    padding: #{$base-spacing * 2};
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background: $light-grey;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
  }

  .image-search {
    flex: 1;
  }

  /* CUSTOM CLASSES */
  .primary-btn {
    @include button($primary);
  }
  .primary-link {
    @include stateful-text($primary);
  }
  .primary-text {
    color: $primary;
  }
  .transparent-btn {
    @include button;
  }
  .field {
    @include input;
  }
  .padded {
    @include padded-block;
  }
  .rounded {
    @include rounded-border;
  }
  .primary-border {
    @include stateful-border($primary);
  }
  .primary-bg {
    background-color: lighten($primary, 38%);
  }
  .white-bg {
    background-color: $white;
  }
}
</style>
