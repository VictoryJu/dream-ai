/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://cndowy24.cafe24.com/api/:path*',
      },
    ];
  },
};

export default nextConfig;
