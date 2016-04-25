var path = require("path");

var webpack = require('webpack');
//var CommonsChunkPlugin = require("../../lib/optimize/CommonsChunkPlugin");
module.exports = {
	entry: {
		pageA: "./pageA",
		pageB: "./pageB"
	},
	output: {
		path: path.join(__dirname, "js"),
		filename: "[name].bundle.js",
		chunkFilename: "[id].chunk.js",
		publicPath: "/js/"
	},
	devtool: 'source-map',
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			filename: "commons.js",
			name: "commons"
		})
	]
}