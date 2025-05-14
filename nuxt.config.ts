// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui"],
  devtools: { enabled: true },
  compatibilityDate: "2024-12-19",
  future: {
    compatibilityVersion: 4,
  },
  css: ["~/assets/css/main.css"],
});
