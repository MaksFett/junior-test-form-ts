import { unsplashApi } from './unsplash';
import { cacheService } from './cacheService';
import { type Image } from './types';


class MyRepository {
  public getImagesQuery = () =>
    cacheService.createQuery(['images'], async () => {
      const result = await unsplashApi.photos.list({ perPage: 5 });

      if (result.errors) {
        throw new Error(result.errors.join('\n'));
      }

      return new Promise<Image[]>((resolve) => {
        resolve(
          result.response.results.map((image, index) => ({
            id: index + 1,
            name: image.alt_description || '',
            link: image.urls.full,
            created_at: new Date(image.created_at),
            description: image.description || undefined,
          }))
        );
      })
    }
  );
}

export const myReposytory = new MyRepository();