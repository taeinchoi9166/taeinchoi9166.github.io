const path = require('path');
const WebpackProvidePlugin = require('webpack').ProvidePlugin;

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output:{
        filename: "[name].build.js"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module:{
        rules:[
            {
                test:/(\.tsx)$/,
                use:{
                    loader: "ts-loader",
                }
            },
            {
                test:/(\.(scss|css))$/,
                loaders:['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new WebpackProvidePlugin({
            React: 'react'
        })
    ]
};
