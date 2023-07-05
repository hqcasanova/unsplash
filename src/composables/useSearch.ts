import Api from '@/api';
import {
  ref, Ref,
  computed, ComputedRef,
} from 'vue';

import { fromPhoto } from '@/models/ImageItem';

const query = ref<string>('');
const images = ref<any[] | null>(null);
const currPage = ref<number>(0);
const totalPages = ref<number>(1);
const isLoading = ref<boolean>(false);
const error = ref<string>('');
const hasImages = computed(() => images.value !== null);

type UseSearch = {
  firstPage: () => void,
  nextPage: () => void,
  query: Ref<string>,
  images: Ref<any[] | null>,
  error: Ref<string>,
  hasImages: ComputedRef<boolean>,
  isLoading: Ref<boolean>,
};

export default function (initQuery?: string): UseSearch {
  if (initQuery) {
    query.value = initQuery;
  }

  const onSuccess = (results: any[]) => {
    if (currPage.value > 1) {
      results.forEach((photo) => {
        images.value?.push(fromPhoto(photo)); // eslint-disable-line no-unused-expressions
      });
    } else {
      images.value = results.map((photo) => fromPhoto(photo));
    }
  };

  const search = async () => {
    let response;

    if (query.value.length) {
      isLoading.value = true;

      try {
        response = await Api.search(query.value, currPage.value);
        error.value = '';
        totalPages.value = response.total_pages;
        onSuccess(response.results);
      } catch (exception) {
        if (exception instanceof Error) {
          error.value = exception.message;
          images.value = null;
        }
      } finally {
        isLoading.value = false;
      }
    } else {
      images.value = null;
    }
  };

  const firstPage = () => {
    currPage.value = 1;
    totalPages.value = 1;
    search();
  };

  const nextPage = () => {
    if (currPage.value === totalPages.value) {
      return;
    }

    currPage.value += 1;
    search();
  };

  return {
    firstPage,
    nextPage,
    query,
    images,
    error,
    hasImages,
    isLoading,
  };
}
