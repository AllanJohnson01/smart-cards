var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
      'webpack-hot-middleware/client',
      './index'
  ],
  output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
  },
  plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['react-hot', 'babel' ],
          exclude: /node_modules/,
          include: __dirname
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
      ]
    }
};
