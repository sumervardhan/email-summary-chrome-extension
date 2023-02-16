const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        sidebar: './src/sidebar.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules : [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: '/src/sidebar.html',
        filename: 'sidebar.html'
    }),
    new CopyPlugin({
        patterns: [
          { from: "public" },
        ]})
    ],
};