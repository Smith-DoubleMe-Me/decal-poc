/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    config.externals.push('sharp');

    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|glb|gltf|usdz)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });

    return config;
  },
};

export default nextConfig;
