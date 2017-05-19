const path = require('path');
const webpack = require('webpack');

// env
const buildDirectory = './dist/';

module.exports = {
  entry: './lib/index.js',
  devServer: {
    hot: true,
    inline: true,
    port: 7700,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(buildDirectory),
    filename: 'app.js',
    publicPath: 'http://localhost:7700/dist',
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
      }},
      {
       test: /\.css$/,
       loader: "style-loader!css-loader"
     },
     {
       test: /\.png$/,
       loader: "url-loader?limit=100000"
     },
     {
       test: /\.jpg$/,
       loader: "file-loader"
     },
     {
       test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
       loader: 'url?limit=10000&mimetype=application/font-woff'
     },
     {
       test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
       loader: 'url?limit=10000&mimetype=application/octet-stream'
     },
     {
       test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
       loader: 'file'
     },
     {
       test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
       loader: 'url?limit=10000&mimetype=image/svg+xml'
     }
    ],
  },
  plugins: [],
};
