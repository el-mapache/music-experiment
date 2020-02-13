var path = require('path');

module.exports = {
  devtool: 'source-map',
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
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        options: {
          babelrc: true,
          extends: path.join(__dirname + '/.babelrc'),
          cacheDirectory: true
        }
      }
    ]
  },
};
