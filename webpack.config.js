const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  entry: {
    main1:"./index.js",
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./service.html",filename: 'service.html' }),
  ],
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    open: true,
    port: 3000,
    proxy: {
      "/api": "http://localhost:8080",
    },
  }, 
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader' ],
      }, 
    ],
  },
};