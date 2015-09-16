var path = require('path');
var webpack = require('webpack');

// TODO: Eventually Docs need eslinting as well

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            "react": __dirname + '/node_modules/react',
            "react/addons": __dirname + '/node_modules/react/addons'
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /docs/, /lib/],
                loader: "eslint-loader"
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel?optional[]=runtime&stage=0'],
                include: path.join(__dirname, 'src')
                //exclude: /node_modules/
            }
        ]
    },
    eslint: {
        configFile: '.eslintrc'
    }
};