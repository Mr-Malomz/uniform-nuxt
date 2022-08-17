import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ['~/assets/css/tailwind.css'],
  //add below section
  modules: ['@uniformdev/uniform-nuxt'],
  uniform: {
    projectId: process.env.NUXT_ENV_PROJECT_ID,
    readOnlyApiKey: process.env.NUXT_ENV_API_KEY,
  },
});
