var webpack = require('webpack');
 
module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'}
    ]
  },
    plugins: [
        new webpack.BannerPlugin('webpack入门案例')
    ]
}