<template>
  <section class="image-search">
    <base-search
      class="image-search__field rounded white-bg"
      placeholder="Search for photos..."
      v-model="fieldValue"
      @clear="fieldValue = ''"
      @search="query = fieldValue"
    />

    <div class="image-search__results">
      <image-grid
        v-if="hasImages"
        class="image-search__grid"
        emptyMessage="No images found"
        :images="(images as any[])"
      />

      <div
        v-else
        class="image-search__feedback"
      >
        {{ isLoading ? 'Getting images...' : 'Type in the name of an image above' }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import useSearch from '@/composables/useSearch';
import BaseSearch from '@/components/ui/BaseSearch.vue';
import ImageGrid from '@/components/ImageGrid.vue';

type Props = {
  initQuery?: string
}

const props = withDefaults(defineProps<Props>(), {
  initQuery: '',
});

const {
  search,
  query,
  images,
  hasImages,
  isLoading,
} = useSearch(props.initQuery);
const fieldValue = ref<string>(props.initQuery);

watch(query, search);
</script>

<style scoped lang="scss">
.image-search {
  width: 100%;
  text-align: center;

  &__field {
    width: 100%;
    max-width: 500px;
    margin: 1.5rem auto;
  }
}
</style>
