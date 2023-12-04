/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              hostname: 'openweathermap.org',
          },
      ],
  },
}

module.exports = nextConfig;