const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		header: './modules/header/header.js',
		body: './modules/body/body.js',
		footer: './modules/footer/footer.js',
		},
	  mode: "development",
		plugins: [
		new HTMLWebpackPlugin(),
		new CleanWebpackPlugin()
	  ],
	output: {
		filename: "[name].bundle.js",
    	path: path.resolve(__dirname, "public")
	},
	devtool: 'inline-source-map',
	optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
	},
	performance: {
		maxAssetSize: 100000,
	  },
	  devServer: {
		contentBase: './public',
		compress: true,
		port: 8564,
	  },
	module: {
		rules: [
		  {
			test: /\.css$/i,
			use: ["style-loader", "css-loader"],
		  },
		  {
			test: /\.css$/, use: ['style-loader', 'css-loader']
		},
		{
			test: /\.(gif|png|jpe?g|svg)$/i,
			use: [
				'file-loader',
				{
					loader: 'image-webpack-loader',
					options: {
						bypassOnDebug: true, // webpack@1.x
						disable: true, // webpack@2.x and newer
					},
				},
			],
		}
		],
	  },
}
