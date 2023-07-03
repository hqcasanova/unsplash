import axios from 'axios';

type User = {
  username: string,
  portfolio_url: string, // eslint-disable-line camelcase
}
type Urls = {
  regular: string,
}
export type Photo = {
  id: string,
  description: string,
  user: User,
  urls: Urls,
}

const PHOTOS_HOST = 'https://api.unsplash.com/';
const ACCESS_KEY = 'B8oEDDuYg5MSeSgEzL7BnqTg5PuWIbqSrhC7qnCwiAk';
const PAGE_SIZE = '30';

/* Basic global error handler */
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    alert(`Error encountered while making a request to ${error.config.url}`);
    console.error(error);
    return Promise.reject(error);
  },
);

export default {

  /**
   * Retrieves the list of images that match a given query.
   * @returns Array with properties of matching images.
   */
  search(query = ''): Promise<Photo[]> {
    const promise = axios.get(`${PHOTOS_HOST}/search/photos`, {
      params: {
        query,
        per_page: PAGE_SIZE,
      },
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });

    return promise.then((response) => response.data.results);
  },
};
