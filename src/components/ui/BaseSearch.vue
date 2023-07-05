<template>
  <form
    class="base-search primary-border"
    role="search"
    @submit.prevent="onSearch"
  >
    <input
      ref="fieldEl"
      v-model.trim="inputValue"
      class="base-search__input field"
      type="search"
      autocapitalize="none"
      autocomplete="off"
      spellcheck="false"
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
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z" />
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
        <path d="M16.5 15c.9-1.2 1.5-2.8 1.5-4.5C18 6.4 14.6 3 10.5 3S3 6.4 3 10.5 6.4 18 10.5 18c1.7 0 3.2-.5 4.5-1.5l4.6 4.5 1.4-1.5-4.5-4.5zm-6 1c-3 0-5.5-2.5-5.5-5.5S7.5 5 10.5 5 16 7.5 16 10.5 13.5 16 10.5 16z" />
      </svg>
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

export type Props = {
  placeholder?: string,
  modelValue?: string,
}
export type Emits = {
  (e: 'update:modelValue', keyValue: Props['modelValue']): void
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Type in a value',
  modelValue: '',
});
const emit = defineEmits<Emits>();

const inputValue = ref<string>(props.modelValue);
const fieldEl = ref<HTMLInputElement | null>(null);

const onSearch = () => {
  emit('update:modelValue', inputValue.value);
};
const onClear = () => {
  fieldEl.value?.focus(); // eslint-disable-line no-unused-expressions
  inputValue.value = '';
};

watch(() => props.modelValue, (currValue) => {
  inputValue.value = currValue;
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
