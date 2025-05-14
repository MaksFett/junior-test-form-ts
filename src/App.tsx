import { useState } from 'react';

import { Form, ImageList } from './components';
import { type Image } from './types';

function App() {
  const [images, setImages] = useState<Image[]>([]);

  const addImage = (image: Image) => {
    image.created_at = new Date();
    image.id = images.map((i) => i.id).reduce((a, b) => Math.max(a, b), 0) + 1;
    setImages([...images, image]);
  };

  const deleteImage = (id: number) => {
    setImages(images.filter((i) => i.id !== id));
  };

  return (
    <>
      <Form addImage={addImage} />
      <ImageList images={images} deleteImage={deleteImage} />
    </>
  );
}

export default App;
