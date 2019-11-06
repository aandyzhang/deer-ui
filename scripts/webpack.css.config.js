const webpack = require("webpack");
const path = require("path");
const fs = require("fs")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const components = path.resolve(__dirname, "../src/components");
const mainFile = "style.scss"
//多入口
function getEntry() {
	let entryMap = {};
	fs.readdirSync(components).forEach((pathname) => {
        let fullPathName = path.resolve(components, pathname);
		let stat = fs.statSync(fullPathName);
        let fileName = path.resolve(fullPathName, mainFile);
		if (stat.isDirectory() && fs.existsSync(fileName)) {
			entryMap[pathname] = fileName;
		}
	});
	return entryMap;
}
const entryMap = getEntry();

module.exports = {
  mode: "production",
  entry: entryMap,
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
                publicPath: "/"
            },
        },'css-loader','postcss-loader','sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: '../lib/[name]/style.scss',
    }),
    new MiniCssExtractPlugin({
        filename: '../es/components/[name]/style.scss',
    })
  ],
  output: {
    path: path.resolve(__dirname,"../ignore"),
  },
};
