const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
  devServer: {
    compress: true,
    historyApiFallback: true,
    publicPath: 'http://localhost:8080/dist/',
    port: 8080
  },
  devtool: 'source-map',
  entry: {
    app: './src/app.js',
    vendor: ['babel-polyfill', 'react', 'react-dom', 'react-router', 'redux', 'react-redux']
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: '/dist/',
    path: __dirname + '/dist'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          }
        ]
      },
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
    ],

  },
  plugins: [
    new CheckerPlugin()
  ]
}
