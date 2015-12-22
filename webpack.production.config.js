var webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
    entry: [
    	"./index"
    ],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loaders: ["babel-loader"]}
		]
	}
}