import { makeAutoObservable } from 'mobx';

import { type Image } from './types';
import { myReposytory } from './repository';

export class ImagesStore {
  images: Image[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setImages(images: Image[]) {
    this.images = images;
  }

  addImage(image: Image) {
    image.id =
      this.images.map((i) => i.id).reduce((a, b) => Math.max(a, b), 0) + 1;

    this.images.push(image);
  }

  deleteImage(id: number) {
    this.images = this.images.filter((i) => i.id !== id);
  }

  private get query() {
    return myReposytory.getImagesQuery();
  }

  loadImages = () => {
    this.query.async().then((data) => {
      this.setImages(data);
    });
  }
}

export const imagesStore = new ImagesStore();
