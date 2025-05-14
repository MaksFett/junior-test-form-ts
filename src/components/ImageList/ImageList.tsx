import DeleteIcon from '@mui/icons-material/Delete';

import { ImageListWrapper } from './styles';
import { ImageListProps } from './types';

export const ImageList: React.FC<ImageListProps> = ({ images, deleteImage }) => {

  return (
    <ImageListWrapper>
      {images.map((image) => <li>
          <div>{image.name} {image.id}</div> 
          <div>{image.created_at.toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}</div> 
          <img src={image.link}/>
          <button onClick={(e) => {
            e.preventDefault(); 
            deleteImage(image.id)
          }}>
            <DeleteIcon />
          </button>
          {'description' in image && <div>{image.description}</div>}
        </li>)}
    </ImageListWrapper>
  );
};
