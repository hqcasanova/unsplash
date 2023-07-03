import Api from '@/api';
import {
  ref, Ref,
  computed, ComputedRef,
} from 'vue';

import { fromPhoto } from '@/models/ImageItem';

const query = ref<string>('');

type UseSearch = {
  search: () => void,
  query: Ref<string>,
  images: Ref<any[] | null>,
  hasImages: ComputedRef<boolean>,
  isLoading: Ref<boolean>,
};

export default function (initQuery: string): UseSearch {
  const isLoading = ref<boolean>(false);
  const images = ref<any[] | null>(null);
  const hasImages = computed(() => !isLoading.value && images.value !== null);

  if (initQuery) {
    query.value = initQuery;
  }

  const search = async () => {
    let results;

    if (query.value.length) {
      isLoading.value = true;
      results = await Api.search(query.value);
      images.value = results.map((photo) => fromPhoto(photo));
      isLoading.value = false;
    } else {
      images.value = null;
    }
  };

  return {
    search,
    query,
    images,
    hasImages,
    isLoading,
  };
}
