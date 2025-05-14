import { type Image } from '../../types';

export type ImageListProps = {
  images: Image[];
  deleteImage: (id: number) => void;
};
