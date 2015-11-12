var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
	context: __dirname + "/webpack/src",
	entry: {
		app: './app.js',
		// 'pages.home': './pages/home.js',
	},
	output: {
		path: __dirname + "/webpack/dist/",
		filename: '[name].js'
	},
	devtool: 'inline-source-map',
	module: {
		loaders: [
			// { test: /\.css$/, loader: "style!css" },
			// { test: /\.css$/, loader: 'style-loader!css-loader?modules' },
			{ test: /\.css$/, loader: 'style-loader!css-loader' },
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: 'babel-loader?presets[]=es2015&presets[]=react',
			},
		]
	},
	plugins: [
		new CommonsChunkPlugin('init.js'),
		// new uglifyJsPlugin({
		// 	compress: {
		// 		warnings: false
		// 	}
		// }),
	],
	externals: {
		// 'React': 'React',
		// 'ReactDOM': 'ReactDOM',
		// 'jquery': '$',
	}
};
