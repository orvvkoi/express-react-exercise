const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
    entry: [`${paths.client}/index.js`],
    output: {
        path: paths.dist,
        publicPath: '/',
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].chunk.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test',
            template: `${paths.public}/template.html`,
            favicon: `${paths.public}/favicon.ico`,
            filename: 'index.html',
            meta: {
                viewport: 'width=device-width, initial-scale=1'
            }
        })
    ]
};
