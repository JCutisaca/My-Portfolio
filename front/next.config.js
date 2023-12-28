/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'openweathermap.org'
            },
            {
                hostname: 'res.cloudinary.com',
            }
        ],
    },
}

module.exports = nextConfig;