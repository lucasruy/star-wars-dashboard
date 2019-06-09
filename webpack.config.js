const join = require('path').join

const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    main: './src/scripts/app.jsx'
  },
  resolve: {
    alias: {
      components: join(__dirname, 'src/scripts/components'),
      routes: join(__dirname, 'src/scripts/routes'),
      utils: join(__dirname, 'src/scripts/utils'),
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