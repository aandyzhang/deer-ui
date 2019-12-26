// const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const srcRoot = path.resolve(__dirname, "../components");
const buildPath = path.resolve(__dirname, "../dist");

const {  name } = require("../package.json");

module.exports = {
  mode: "production",
  entry: {
    [name]: ["./components/index.js"]
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
    extensions: [".js", ".jsx",'.less','.css']
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
        include: [path.resolve("components")]
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
              importLoaders: 3,
            }
          },
          {
            loader: "postcss-loader",
            options: { sourceMap: false }
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: false
            }
          },
          // {
          //   loader: 'sass-resources-loader',
          //   options: {
          //     resources: [`${srcRoot}/components/styles/normalize.less`]
          //   }
          // },
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: "url-loader?limit=8192",
        include: srcRoot
      }
    ]
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        // 压缩css  与 ExtractTextPlugin 配合使用
        cssProcessor: require("cssnano"),
        cssProcessorOptions: { discardComments: { removeAll: true } }, // 移除所有注释
        canPrint: true // 是否向控制台打印消息
      })
    ],
    noEmitOnErrors: true,
  },
  plugins: [
    new ProgressBarPlugin(),
    new CleanWebpackPlugin({ buildPath }),
    new MiniCssExtractPlugin({
      filename: "[name].min.css" // 提取后的css的文件名
    }),
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
