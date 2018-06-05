const path = require('path')

module.exports = {
  // mode: env.production ? 'production' : 'development',
  // devtool: env.production ? 'source-maps' : 'eval',
  mode: 'development',
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: '[chunkhash].js'
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/components'),
      '_': path.resolve(__dirname, 'src/router'),
      '$': path.resolve(__dirname, 'src/utils')
    }
  }
}
