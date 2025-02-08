import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
    },
  },
  experimental: { appManifest: false },
  modules: ["@nuxt/content", "nuxt-icon", "@nuxt/image"],
  compatibilityDate: "2024-12-18",
  plugins: [
    { src: '~/plugins/hanko.js', mode: 'client' }  // Ensure Hanko is only loaded client-side
  ]
});
