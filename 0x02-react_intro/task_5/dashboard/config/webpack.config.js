const path = require('path')


module.exports = {
  context: path.resolve(__dirname, '../src'),
	entry: './index.js',
	output: {
		path: path.resolve('./public'),
		filename: 'bundle.js',
		clean: true,
	},
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: path.resolve('/dist/index.html'),
    compress: true,
    hot: true,
    port: 8564,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
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
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ]
    }
}