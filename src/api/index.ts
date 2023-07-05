import axios from 'axios';

type User = {
  username: string,
  portfolio_url: string, // eslint-disable-line camelcase
}
type Urls = {
  regular: string,
  small: string,
}
export type Photo = {
  id: string,
  description: string,
  alt_description: string, // eslint-disable-line camelcase
  user: User,
  urls: Urls,
}
export type Results = {
  results: Photo[],
  total: number,
  total_pages: number, // eslint-disable-line camelcase
}

const HOST = JSON.parse(process.env.VUE_APP_API_HOST);
const KEY = JSON.parse(process.env.VUE_APP_API_KEY);
const PAGE_SIZE = JSON.parse(process.env.VUE_APP_PAGE_SIZE);
let prevController: AbortController;

/* Basic global error handler */
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error);
    return Promise.reject(error);
  },
);

export default {

  /**
   * Retrieves the list of photos that match a given query, cancelling
   * any pending requests.
   */
  search(query = '', currPage = 1): Promise<Results> {
    const controller = new AbortController();
    const { signal } = controller;

    if (prevController) {
      prevController.abort();
    }

    prevController = controller;
    const promise = axios.get(`${HOST}/search/photos`, {
      signal,
      params: {
        query,
        page: currPage,
        per_page: PAGE_SIZE,
      },
      headers: {
        Authorization: `Client-ID ${KEY}`,
      },
    });

    return promise.then((response) => response.data);
  },
};
