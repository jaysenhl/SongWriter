/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'], // Permitir imágenes de Google
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
