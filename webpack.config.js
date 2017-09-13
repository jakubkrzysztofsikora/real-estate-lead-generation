var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/scripts/main.js'
    },
    output: {
        filename: './dist/scripts/[name].js'
    },
    devtool: 'source-map', 
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
			},
			{
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract('css-loader!sass-loader')
			},
			{
				test: /\.(jpe?g|png|gif|ico)$/i,
				loaders: "file-loader?name=/dist/images/[name].[ext]"
			},
			{
				test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader?name=/dist/styles/fonts/[name].[ext]'
			}
        ]
	},
	plugins: [
        new ExtractTextPlugin('dist/styles/main.css', {
            allChunks: true
		}),
		new HtmlWebpackPlugin({
			template: 'index.template.ejs',
			inject: 'body',
		  })
	],
	resolve: {
		extensions: ['.js', '.jsx'],
	  },
}