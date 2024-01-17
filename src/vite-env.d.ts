declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >;

  export default ReactComponent;
}

/// <reference types="vite/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TOKEN_KEY: string;
  readonly VITE_BASE_URL: Url;
  readonly VITE_NODE_ENV: 'development' | 'production';
}
