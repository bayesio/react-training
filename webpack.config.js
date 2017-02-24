module.exports = {
  devServer: {
    compress: true,
    publicPath: 'http://localhost:8080/dist/',
    port: 8080
  },
  devtool: 'inline-source-map',
  entry: {
    app: './src/app.js',
    vendor: ['babel-polyfill', 'react', 'react-dom', 'react-router', 'redux', 'react-redux']
  },
  externals: {
    "jquery": "jQuery"
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
          }
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
        ],
      },
      {
        test: /\.useable\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              useable: true
            },
          },
          { loader: "css-loader" },
        ],
      },
    ]
  }
}
