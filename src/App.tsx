import { Brand, createTheme, Divider } from '@astral/ui';
import { ThemeProvider } from '@emotion/react';
import { observer } from 'mobx-react-lite';

import { ImageForm, ImageList } from './components';

const App = observer(() => {
  const theme = createTheme({ brand: Brand.DEFAULT });

  return (
    <ThemeProvider theme={theme}>
      <ImageForm />
      <Divider />
      <ImageList />
    </ThemeProvider>
  );
});

export default App;
