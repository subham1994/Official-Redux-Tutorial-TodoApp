var path = require("path");

module.exports = {
	entry: path.resolve(__dirname, "src") + "/index.js",
	output: {
		path: path.resolve(__dirname, "dist") + "/app",
		filename: "bundle.js",
		publicPath: "/app/"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, "src"),
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015"]
				}
			},
			{
				test: /(\.css)$/,
				loaders: ["style-loader", "css-loader"]
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file-loader"
			},
			{
				test: /\.(woff|woff2)$/,
				loader: "url-loader?prefix=font/&limit=5000"
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url-loader?limit=10000&mimetype=application/octet-stream"
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url-loader?limit=10000&mimetype=image/svg+xml"
			},
		]
	}
};
