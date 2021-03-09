const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 5001,
        open: true,
        proxy: {
            '/': 'http://localhost:5000'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['react-hot-loader/babel'],
                        cacheDirectory: true
                    }
                }
            }
        ]
    },
    plugins: [
        // Only update what has changed on hot reload
        new webpack.HotModuleReplacementPlugin()
    ]
});
