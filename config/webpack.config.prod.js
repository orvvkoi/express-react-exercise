const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');
const paths = require('./paths');

module.exports = merge(common, {
    mode: 'production',
    devtool: false,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                `${paths.build}/*`,
                `${paths.dist}/*`
            ]
        }),
        // Extracts CSS into separate files
        // Note: style-loader is for development, MiniCssExtractPlugin is for production
        new MiniCssExtractPlugin({
            filename: `${paths.public} / [name].[contenthash].css`,
            chunkFilename: `${paths.public} / chunk.[id].css`
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin()],
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            chunks: 'all'
        },
        removeEmptyChunks: true,
        mergeDuplicateChunks: true,
        removeAvailableModules: false
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
});
