var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        'index': path.join(__dirname, 'src', 'index.jsx')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.jsx|\.js$/,
            exclude: /node_modules/,//path.join(__dirname, 'node_modules')
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by ljh')
    ]
};