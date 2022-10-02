const path = require('path');
const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    alias: {
      '@/core': path.resolve(__dirname, 'src/core'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),
      '@/hocs': path.resolve(__dirname, 'src/hocs'),
      '@/redux': path.resolve(__dirname, 'src/redux'),
      '@/apis': path.resolve(__dirname, 'src/apis'),
      '@/helpers': path.resolve(__dirname, 'src/helpers'),
      '@/constants': path.resolve(__dirname, 'src/constants'),
      '@/types': path.resolve(__dirname, 'src/types'),
      '@/data': path.resolve(__dirname, 'src/data'),
      '@/styles': path.resolve(__dirname, 'src/styles'),
      '@/icons': path.resolve(__dirname, 'src/icons'),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#74e99c' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
