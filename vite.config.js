import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  server: {
    port: 5173,
    host: true,
    allowedHosts: [
      "eliminate-solved-jaguar-foto.trycloudflare.com", // 👈 your Cloudflare link
      ".trycloudflare.com" // 👈 allow all trycloudflare links (optional)
    ],
  },
})
