const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: './main.js'
  },
  module: {
    rules: [
      {
        test: /\.m|js|jsx/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.png|svg|jpg|gif/,
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
    watchContentBase: true,
    progress: true,
    hot: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}