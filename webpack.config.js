var path = require('path');
var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry:  [
    path.resolve(__dirname, 'src/app.js')
  ],
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'app.js',
    publicPath: 'dist/'
  },
  devtool: 'source-map'
}