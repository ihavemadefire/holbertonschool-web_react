const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	output: {
		filename: 'bundle.js'
	},
  plugins: [new HtmlWebpackPlugin({
    name: "index.html",
    template: './dist/index.html'
  })],
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: './dist',
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