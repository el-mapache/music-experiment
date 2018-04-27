import path from 'path';
import webpack from 'webpack';

export default() => ({
  mode: 'development',
  entry: [
    path.join(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'build.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), './node_modules']
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
      }
    ]
  },
});

