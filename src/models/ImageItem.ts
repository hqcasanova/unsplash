import { Photo } from '@/api';

export default class ImageItem {
  id: string;
  description: string | null;
  url: string;
  username: string;
  userUrl: string | null;

  constructor(
    {
      id,
      description = null,
      url = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
      username = '',
      userUrl = null,
    } : {
      id: string,
      description?: string | null,
      url?: string,
      username?: string,
      userUrl?: string | null,
    },
  ) {
    this.id = id;
    this.description = description ?? 'An image';
    this.url = url;
    this.username = username;
    this.userUrl = userUrl ?? '';
  }
}

export function fromPhoto({
  id,
  description,
  user,
  urls,
}: Photo): ImageItem {
  return new ImageItem({
    id,
    description,
    url: urls.regular,
    username: user.username,
    userUrl: user.portfolio_url,
  });
}
