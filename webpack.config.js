var webpack = require('webpack');

module.exports = {
    entry: {
        'index': __dirname + '/src/index.jsx'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.jsx|\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by ljh')
    ]
};