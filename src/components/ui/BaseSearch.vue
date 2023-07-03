<template>
  <form
    class="base-search primary-border"
    role="search"
    @submit.prevent="onSearch"
  >
    <input
      class="base-search__input field"
      ref="field"
      type="search"
      autocapitalize="none"
      spellcheck="false"
      v-model="inputValue"
      :placeholder="placeholder"
    >

    <button
      v-if="inputValue.length"
      class="base-search__reset transparent-btn"
      aria-label="Clear"
      type="reset"
      @click="onClear"
    >
      <svg
        class="base-search__icon"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        aria-hidden="false"
      >
        <desc lang="en-US">An X shape</desc>

        <!-- eslint-disable-next-line max-len -->
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"></path>
      </svg>
    </button>

    <button
      class="base-search__submit primary-btn"
      aria-label="Search"
      type="submit"
    >
      <svg
        class="base-search__icon"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        aria-hidden="false"
      >
        <desc lang="en-US">A magnifying glass</desc>

        <!-- eslint-disable-next-line max-len -->
        <path d="M16.5 15c.9-1.2 1.5-2.8 1.5-4.5C18 6.4 14.6 3 10.5 3S3 6.4 3 10.5 6.4 18 10.5 18c1.7 0 3.2-.5 4.5-1.5l4.6 4.5 1.4-1.5-4.5-4.5zm-6 1c-3 0-5.5-2.5-5.5-5.5S7.5 5 10.5 5 16 7.5 16 10.5 13.5 16 10.5 16z"></path>
      </svg>
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseSearch',

  props: {
    placeholder: {
      type: String,
      default: 'Type in a value',
    },

    modelValue: {
      type: String,
      default: '',
    },
  },

  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },

      set(value: string) {
        return this.$emit('update:modelValue', value);
      },
    },
  },

  methods: {
    onSearch() {
      this.$emit('search', this.inputValue);
    },

    onClear() {
      const fieldEl = this.$refs.field as HTMLInputElement;

      fieldEl.focus();
      this.$emit('clear');
    },
  },
});
</script>

<style scoped lang="scss">
.base-search {
  overflow: hidden;
  display: inline-flex;

  &__input {
    width: 100%;
    padding-right: 0;

    &::-webkit-search-cancel-button,
    &::-webkit-search-decoration {
      -webkit-appearance: none;
      appearance: none;
    }
  }

  &__icon {
    display: block;
    height: 1.4em;
    fill: currentColor;
  }
}
</style>
