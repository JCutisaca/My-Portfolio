/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'openweathermap.org'
            },
            {
                hostname: 'res.cloudinary.com',
            },
            {
                hostname: 'i.scdn.co',
            }
        ],
    },
}

module.exports = nextConfig;