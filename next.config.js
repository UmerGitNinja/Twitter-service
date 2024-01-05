/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.scdn.co',
            pathname: '/image/**',
          },
          {
            protocol: 'https',
            hostname: 'pbs.twimg.com',
            pathname: '/profile_images/**',
          },
          {
            protocol: 'https',
            hostname: 'pbs.twimg.com',
            pathname: '/media/**',
          },
          {
            protocol: 'https',
            hostname: 'pbs.twimg.com',
            pathname: '/amplify_video_thumb/**',
          },
        ],
      },
}

module.exports = nextConfig