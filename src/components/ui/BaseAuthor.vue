<template>
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
</template>

<script setup lang="ts">
export type Props = {
  username?: string,
  userUrl: string,
}

const props = withDefaults(defineProps<Props>(), {
  username: '',
});
</script>