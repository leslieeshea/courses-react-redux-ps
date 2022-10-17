import webpack from "webpack";
import { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

process.env.NODE_ENV = "development";

export const mode = "development";
export const target = "web";
export const devtool = "cheap-module-source-map";
export const entry = "./src/index";
export const output = {
	path: resolve(__dirname, "build"),
	publicPath: "/",
	filename: "bundle.js"
};
export const devServer = {
	stats: "minimal",
	overlay: true,
	historyApiFallback: true,
	disableHostCheck: true,
	headers: { "Access-Control-Allow-Origin": "*" },
	https: false
};
export const plugins = [
	new HtmlWebpackPlugin({
		template: "src/index.html",
		favicon: "src/favicon.ico"
	})
];
export const module = {
	rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ["babel-loader", "eslint-loader"]
		},
		{
			test: /(\.css)$/,
			use: ["style-loader", "css-loader"]
		}
	]
};
