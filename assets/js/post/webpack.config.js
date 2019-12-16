const path = require('path');
const {ProvidePlugin, HotModuleReplacementPlugin} = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new ProvidePlugin({
            React: 'react'
        })
    ],
    mode: "production"
};
