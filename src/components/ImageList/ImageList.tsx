import DeleteIcon from '@mui/icons-material/Delete';
import {
  ImageListWrapper,
  ImageCard,
  CardHeader,
  CardDate,
  CardImage,
  DeleteButton,
  Description
} from './styles';
import { ImageListProps } from './types';

export const ImageList: React.FC<ImageListProps> = ({ images, deleteImage }) => {

  return (
    <ImageListWrapper>
      {images.map((image) => (
        <ImageCard key={image.id}>
          <DeleteButton onClick={(e) => {
            e.preventDefault();
            deleteImage(image.id);
          }}>
            <DeleteIcon />
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
};
