var webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
    entry: [
    	"webpack-dev-server/client?http://localhost:3000/",
    	"webpack/hot/only-dev-server",
    	"./app.jsx"
    ],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
    module: {
		loaders: [
			{ test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	}
}