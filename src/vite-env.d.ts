/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_UNSPLASH_API_ACCESS_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
