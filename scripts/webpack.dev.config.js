const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const srcRoot = path.resolve(__dirname, "../src");

module.exports = {
  mode: "development",
  entry: {
    path: path.resolve(__dirname, "../example/src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "../example/src"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: path.join(__dirname, "../example/src"),
    compress: true,
    port: 3001, // 启动端口为 3001 的服务
    open: true // 自动打开浏览器
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "babel-loader"
          }
        ]
        // include: srcRoot,
      },
      {
        test: /\.s?css$/,
        use: [
          //  MiniCssExtractPlugin.loader,
          // ""
          "style-loader",
          "cache-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
         MiniCssExtractPlugin.loader,
          "cache-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "less-loader",
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: "url-loader?limit=8192",
        include: srcRoot
      }
    ]
  }
};
