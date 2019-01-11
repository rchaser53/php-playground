const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "./src"),
  devtool: "inline-source-map",
  entry: {
    index: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/public/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".html", ".js"]
  },
  module: {
    rules: [
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    })
  ]
};