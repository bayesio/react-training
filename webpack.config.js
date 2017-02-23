module.exports = {
  devServer: {
    compress: true,
    publicPath: 'http://localhost:8080/dist/',
    port: 8080
  },
  devtool: 'inline-source-map',
  entry: {
    app: './src/app.js',
    vendor: ['babel-polyfill','react', 'react-dom', 'react-router', 'redux', 'react-redux']
  },
  externals: {
    "jquery": "jQuery"
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }]
  }
}
