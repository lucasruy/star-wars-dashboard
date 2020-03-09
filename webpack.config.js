const join = require('path').join

const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    main: './src/scripts/app.js'
  },
  resolve: {
    alias: {
      components: join(__dirname, 'src/scripts/components'),
      images: join(__dirname, 'src/assets/images'),
      routes: join(__dirname, 'src/scripts/routes'),
      utils: join(__dirname, 'src/scripts/utils'),
      svg: join(__dirname, 'src/scripts/svg')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
