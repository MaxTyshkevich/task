import { RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { router } from './router';
import { Theme } from './theme';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

function App() {
  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={Theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </Provider>
  );
}

export default App;
