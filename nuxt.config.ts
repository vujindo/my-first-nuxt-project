// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  devServer: {
    port: parseInt(process.env.PORT || '3000', 10),
  },
  nitro: {
    devProxy: {
      '/api': {
        target: process.env.NUXT_SERVER_API_URL || 'http://localhost:4000/api',
        changeOrigin: true,
      }
    }
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    },
  },
})
