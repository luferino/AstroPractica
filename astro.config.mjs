// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  env: { 
    schema: {
      SHOW_BUY_BUTTON: envFile.boolean({context:"server", access: 'PUBLIC'}),
      SCORE_API_ENDPOINT:envFile.string()
    }
}
);