var webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
    entry: [
    	"webpack-dev-server/client?http://localhost:3000/",
    	"webpack/hot/only-dev-server",
    	"./index"
    ],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
		loaders: [
			{ test: /\.jsx$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader"]}
		]
	}
}