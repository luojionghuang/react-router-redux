var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        'index': path.join(__dirname, 'src', 'index')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: path.join(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        loaders: [{
            test: /\.jsx|\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by ljh')
    ]
};