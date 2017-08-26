var path = require('path');

module.exports = {
	entry: './app/demo.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		// This is to apply rules on module files. e.g. transpilation of es6 into es5 can be done here
		// also sass compilation etc.
		rules: [
			{
				test: /\.jsx?$/,
				include: [
					path.resolve(__dirname, "app")
				],
				loader: 'babel-loader',
				options: {
					presets: [
						'es2015'
					]
				}
			}
		]
	},
	resolve: {
		modules: [
			'node_modules',
			path.resolve(__dirname, "node_modules")
		],
		extensions: [".js", ".json", ".jsx", ".css"]
	}
};
