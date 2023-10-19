/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'files.edgestore.dev',
            port: '',
            pathname: '/tu5mm2ifpavxizoc/publicFiles/_public/**',
          },
        ],
      },
}

module.exports = nextConfig
