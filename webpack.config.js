const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './client/src/index.jsx',
  output: {
    path: path.resolve('client/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\global.scss$/,
      loader: ExtractTextPlugin.extract(
        {
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader!sass-loader'}),
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        {fallback: 'style-loader', use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader'}),
      exclude: /\global.scss$/,
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        {fallback: 'style-loader', use: 'css-loader!postcss-loader'}),
    }, {
      test: /\.(png|jpg|gif|ttf|svg|otf|woff|eot)$/,
      use: 'file-loader',
    }],
  },
  devServer: {
    hot: true,
    port: 3000,
    publicPath: '/dist/',
    proxy: {
      '/': {
        'target': {
          'host': 'localhost',
          'protocol': 'http:',
          'port': 3001,
        },
        ignorePath: true,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      disable: process.env.NODE_ENV !== 'production',
      filename: 'style.css',
    }),
  ],
};