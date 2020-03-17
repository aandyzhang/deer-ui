const webpack = require("webpack");
module.exports = async ({ config, mode }) => {
  config.resolve = {
    extensions: [".js", ".jsx", ".json", ".jsx"]
  };

  config.module.rules.push({
    test: /\.(js|jsx)?$/,
    // loaders: [require.resolve("@storybook/source-loader")],
    loader: "babel-loader",
    enforce: "pre",
    exclude: /node_modules/
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      "style-loader",
      "css-loader",
      "postcss-loader",
      {
        loader: "sass-loader"
      }
    ]
  },
  {
    test: /\.less$/,
    use: [
      "style-loader",
      "css-loader",
      "postcss-loader",
      {
        loader: "less-loader",
        options: {
          javascriptEnabled: true
        },
      }
    ]
  });
  config.plugins.push(
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|en-gb/)
  );
  return config;
};
