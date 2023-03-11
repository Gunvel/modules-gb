const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { resolve } = require('path');

module.exports = {
    entry: './src/entry.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|mp3)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[contenthash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: resolve(__dirname, 'src/index.html') }),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new BundleAnalyzer()
    ],
    devServer: {
        static: {
            directory: resolve(__dirname, 'build'),
        },
        compress: true,
        hot: 'only',
        liveReload: true,
        watchFiles: ['src/**/*', 'build/**/*'],
        open: true,
        port: 9000
    }
};
