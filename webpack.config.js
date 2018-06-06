const path = require('path')
const theme = require('./package.json').theme

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
        use: [{
          loader: 'babel-loader'
        }, {
          loader: 'eslint-loader'
        }]
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'less-loader',
          options: {
            modifyVars: theme,
            // antd less 报错
            javascriptEnabled: true
          }
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  },
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, 'src/components'),
      '_': path.resolve(__dirname, 'src/router'),
      '$': path.resolve(__dirname, 'src/utils')
    }
  }
}
