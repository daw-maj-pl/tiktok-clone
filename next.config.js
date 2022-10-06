/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'media.graphassets.com',
      'lh3.googleusercontent.com',
      'images.unsplash.com'
    ]
  }
};

module.exports = nextConfig;
