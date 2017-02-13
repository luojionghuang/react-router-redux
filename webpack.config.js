var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'index': path.join(__dirname, 'src', 'index')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']//自动识别没带后缀的文件，在import、require或者webpack.config.js中
    },
    module: {
        loaders: [{
            test: /\.jsx|\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.png|\.jpg|\.gif/,
            loader: 'url-loader',
            query: {
                mimetype: 'image/*'
            }
        }]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by ljh'),//文件头部加上作者名称：ljh
        new HtmlWebpackPlugin(),//自动生成html文件
        new webpack.optimize.UglifyJsPlugin({//压缩webpack打包的文件
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ]
};