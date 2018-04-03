import path from 'path';
import webpack from 'webpack';
import { HotModuleReplacementPlugin } from 'webpack';

export default() => ({
  mode: 'development',
  entry: [
    path.join(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'build.js'
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ],
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
  devServer: {
    contentBase: [path.join(__dirname, "build"), path.join(__dirname, "samples"),__dirname,],
    port: 9000,
    inline: false
  }
});

