var webpack = require('webpack')

module.exports = {
  entry: __dirname + '/client.jsx',
  output: {
    path: __dirname + '/public/assets',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/.jsx?$/, /.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          optional: ['runtime', 'es7.decorators']
        }
      },
      {
        test: /.styl$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!stylus-loader'
      },
      {
        test: /.css$/,
        loader: 'css-loader!autoprefixer-loader!stylus-loader'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}
