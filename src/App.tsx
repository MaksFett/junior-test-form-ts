import { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';

import { Form, ImageList } from './components';
import { type Image } from './types';
import { Divider } from './styles';

function App() {
  const [images, setImages] = useState<Image[]>([]);

  const unsplash = createApi({
    accessKey: '4hkxFtXsMpWJQb0mL3u5vVjc02ysju7Hl2lpsR82pgE',
  });

  const addImage = (image: Image) => {
    image.id = images.map((i) => i.id).reduce((a, b) => Math.max(a, b), 0) + 1;
    setImages([...images, image]);
  };

  useEffect(() => {
    unsplash.photos.list({ perPage: 5 }).then((result) => {
      if (result.errors) {
        alert(
          'Ошибка в получении изображений с сайта Unsplash:\n' +
            result.errors.join('\n'),
        );

        console.log(result.errors);
      } else {
        let newImages: Image[] = [];

        result.response.results.forEach((image, index) => {
          let newImage: Image = {
            id: index + 1,
            name: image.alt_description ? image.alt_description : '',
            link: image.urls.full,
            created_at: new Date(image.created_at),
          };

          if (image.description) {
            newImage.description = image.description;
          }

          newImages.push(newImage);
        });

        setImages(newImages);
      }
    });
  }, []);

  const deleteImage = (id: number) => {
    setImages(images.filter((i) => i.id !== id));
  };

  return (
    <>
      <Form addImage={addImage} />
      <Divider />
      <ImageList images={images} deleteImage={deleteImage} />
    </>
  );
}

export default App;
