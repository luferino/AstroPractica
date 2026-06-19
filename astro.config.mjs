// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';


import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  output: 'server',

  env: { 
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({default: true, context:"server", access: 'public'}),
      SCORE_API_ENDPOINT: envField.string({context:"server", access: 'public'}),
    }
},

  adapter: netlify()
});