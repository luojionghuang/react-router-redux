var webpack = require('webpack');

module.exports = {
    entry: {
        'index': __dirname + '/src/index.jsx'
    },
    output: {
        path: __dirname,
        filename: __dirname + '/dist/[name].js'
    },
    module: {
        loaders: [{
            test: /\.jsx|\.js$/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by ljh')
    ]
};