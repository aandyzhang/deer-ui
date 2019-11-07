// const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const srcRoot = path.resolve(__dirname, "../src");
const buildPath = path.resolve(__dirname, "../dist");

const {  name } = require("../package.json");

module.exports = {
  mode: "production",
  entry: {
    [name]: ["./src/index.js"]
  },
  output: {
    path: path.join(process.cwd(), "dist"),
    library: name,
    libraryTarget: "umd",
    umdNamedDefine: true,
    filename: "index.js",
    // libraryExport: "default",
  },
  resolve: {
    extensions: [".js", ".jsx"]
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
        ],
        include: [path.resolve("src")]
      },
      {
        test: /\.s?css$/,
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
            loader: "sass-loader",
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
  },
  plugins: [
    new CleanWebpackPlugin({ buildPath }),
    new MiniCssExtractPlugin({
      filename: "main.min.css" // 提取后的css的文件名
    }),
    new ProgressBarPlugin()
  ],
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    }
  }
};
