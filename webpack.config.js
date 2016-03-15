var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var src_dir = path.join(__dirname, "/src");

var config = {
	context: __dirname,
	entry: {
		app: [
			'webpack-dev-server/client?http://0.0.0.0:8080',
			'webpack/hot/dev-server',
			src_dir + '/App.tsx'
		]
	},
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'App.js?[hash]'
	},
	resolve: {
		extensions: ['', '.ts', '.tsx', '.js']
	},
	module: {
		loaders: [
			{
				test: /\.(tsx|ts)$/,
				loaders: ['react-hot', 'babel-loader', 'ts-loader'],
				include: src_dir
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "TypeScript compiler bug"
		})
	]
};

module.exports = config;
