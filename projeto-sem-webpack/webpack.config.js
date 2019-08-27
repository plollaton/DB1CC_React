const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        filename: 'bundle.[hash].js', //invalidar cache
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template/index.html'
        })
    ]

};