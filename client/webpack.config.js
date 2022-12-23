const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: "./app.js",
  output: {
    filename: "boundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            ignore: ["./node_modules/mapbox-gl/dist/mapbox-gl.js"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader", // injects styles into DOM
          "css-loader", // turns css into common js
        ],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  devServer: {
    static: "./",
    open: true,
    port: 3000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      inject: "body",
    }),
    new Dotenv(),
  ],
};
