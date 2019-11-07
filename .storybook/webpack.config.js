const path = require("path")
const webpack = require('webpack')

module.exports = async ({config, mode})=>{
  config.module.rules.push(
    {
      test: /\.(js|jsx)?$/,
      use: [
        {
          loader: "babel-loader",
        },
      ],
      exclude: "/node_modules/",
    },
    {
      test: /\.less$/,
      use: [
        "style-loader",
        "css-loader",
        "postcss-loader",
        {
          loader: "less-loader",
        },
      ],
    },
    {
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "postcss-loader",
        "sass-loader",
      ],
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
          //   javascriptEnabled: true,
          //   minimize: true,
            sourceMap: false
          }
        },
      ],
      exclude: /node_modules/,
    },
      
    {
      // for font
      test: /\.(ttf|otf|eot|woff(?:2)?)(\?[a-z0-9]+)?$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 10 * 1000,
          },
        },
      ],
    },
    {
      // for svg
      test: /\.(svg?)(\?[a-z0-9]+)?$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 10 * 1000,
          },
        },
      ],
    },
    {
      test: /\.(jpe?g|png|gif|ogg|mp3)$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 10 * 1000,
          },
        },
      ],
    },
  )
  config.resolve.extensions.push('.js', '.jsx');
  // mode.push("production");
  config.plugins.push(new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|en-gb/));
  return config
}
