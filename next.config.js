/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 's.gravatar.com'],
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Content-Security-Policy', value: "default-src 'self' https://*.auth0.com; img-src 'self' data: https: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.auth0.com; style-src 'self' 'unsafe-inline'; connect-src 'self' https://*.auth0.com;" }
        ],
      },
    ];
  },
  experimental: {
    serverActions: true
  }
};

module.exports = nextConfig;
