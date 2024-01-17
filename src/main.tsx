import '@mantine/core/styles.css';
import './index.css';

import ReactDOM from 'react-dom/client';

import { MantineProvider } from '@mantine/core';

import { App } from './app/App';
import { cssVariablesResolver, theme } from './app/theme';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <MantineProvider
    theme={theme}
    cssVariablesResolver={cssVariablesResolver}
    defaultColorScheme="dark"
  >
    <App />
  </MantineProvider>
);
