const path = require('path')

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
    store: path.resolve(__dirname, 'src/store.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
    libraryTarget: 'amd',
    library: 'reactApp'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          publicPath: '/portal/react-app/'
        }
      },
    ],
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 3031
  }
}
