const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const fileName = ext => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`
const resolvePath = location => path.resolve(__dirname, location)

const jsLoaders = () => {
	const loaders = [
		{
			loader: 'babel-loader',
		},
	]

	if (isDev) {}

	return loaders
}

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: './index.js',
	output: {
		filename: fileName('js'),
		path: resolvePath('dist')
	},
	resolve: {
		extensions: ['.js'],
		alias: {
			'@': resolvePath('src'),
			'@core': resolvePath('src/core')
		},
	},
	devtool: isDev ? 'source-map' : false,
	devServer: {
		port: 3000,
		hot: isDev
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HTMLWebpackPlugin({
			template: 'index.html',
			minify: {
				removeComments: isProd,
				collapseWhitespace: isProd
			},
		}),
		new CopyPlugin([
			{ from: resolvePath('src/favicon3.ico'), to: resolvePath('dist') },
		]),
		new MiniCssExtractPlugin({
			filename: fileName('css')
		})
	],
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: jsLoaders(),

			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}
		]
	}
}
