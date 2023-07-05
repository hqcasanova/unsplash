<template>
  <app-header :init-query="''" />
  <image-results />
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import ImageResults from '@/components/ImageResults.vue';
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
  #app {
    padding: #{$base-spacing * 2};
    min-height: 100vh;
    text-align: center;
    background: $light-grey;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
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
  .primary-outlined {
    @include outlined-text($primary);
  }
  .danger-text {
    color: $danger;
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
