import { Photo } from '@/api';

export default class ImageItem {
  id: string;
  description: string | null;
  altDescription: string | null;
  url: string;
  username: string;
  userUrl: string | null;

  constructor(
    {
      id,
      description = null,
      altDescription = null,
      url = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
      username = '',
      userUrl = null,
    } : {
      id: string,
      description: string | null,
      altDescription?: string | null,
      url?: string,
      username?: string,
      userUrl?: string | null,
    },
  ) {
    this.id = id;
    this.description = description ?? '';
    this.altDescription = altDescription ?? 'An image';
    this.url = url;
    this.username = username;
    this.userUrl = userUrl ?? '';
  }
}

export function fromPhoto({
  id,
  description,
  alt_description, // eslint-disable-line camelcase
  user,
  urls,
}: Photo): ImageItem {
  return new ImageItem({
    id,
    description,
    altDescription: alt_description,
    url: urls.small,
    username: user.username,
    userUrl: user.portfolio_url,
  });
}
