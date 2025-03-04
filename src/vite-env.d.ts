/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_DATABASE_URL: string;
  readonly VITE_DATABASE_KEY: string;
  readonly VITE_DATABASE_USER_EMAIL: string;
  readonly VITE_DATABASE_USER_PW: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
