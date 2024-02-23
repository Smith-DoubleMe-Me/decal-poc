/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.externals.push('sharp'); // sharp 문제 발생 -> 0.33 이상 버전에서 runtime 환경에서 모듈을 제대로 가져오지 못하는 문제 발생하여 재설치 진행 (yarn add sharp --ignore-engines)
    // loadModelWithTransform, usedKHRMaterialsPbrSpecularGlossiness에서 발생

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
