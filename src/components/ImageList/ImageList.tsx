import { BinOutlineMd } from '@astral/ui';
import { useEffect } from 'react';
import { observer } from "mobx-react-lite";

import {
  ImageListWrapper,
  ImageCard,
  CardHeader,
  CardDate,
  CardImage,
  DeleteButton,
  Description
} from './styles';
import { imagesStore } from '../../imagesStore';

export const ImageList: React.FC = observer(() => {

  useEffect(() => {
      imagesStore.loadImages();
  }, [])

  return (
    <ImageListWrapper container spacing={5}>
      {imagesStore.images.map((image) => (
        <ImageCard key={image.id}>
          <DeleteButton onClick={(e) => {
            e.preventDefault();
            imagesStore.deleteImage(image.id);
          }}>
            <BinOutlineMd />
          </DeleteButton>
          <CardHeader>{image.name}</CardHeader>
          <CardDate>
            Дата добавления:{' '}
            {image.created_at.toLocaleDateString('ru-RU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </CardDate>
          {'description' in image && <Description>{image.description}</Description>}
          <CardImage src={image.link} alt={image.name} />
        </ImageCard>
      ))}
    </ImageListWrapper>
  );
});
