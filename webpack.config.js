const htmlWebpack=require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: "development",
entry: path.resolve("src/index.js"),
  output: {
    path: path.resolve("build"),
    filename: "bundle.js",
    clean: true,
  },
  plugins: [
    new htmlWebpack({
      title: "react",
      filename: "index.html",
      template: path.resolve("public/index.html"),
    }),
    new htmlWebpack({
      title: "react 2",
      filename: "signUp.html",
      template: path.resolve("public/signUp.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve("public"),
    },
    port: 3000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(css|sass|scss)$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|webp|png|gif|svg|mp4)$/,
        exclude: /node_modules/,
        type: "asset/resource" /**  support images/ videos*/,
      },
    ],
  },
};

