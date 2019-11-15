const path = require('path');
const WebpackProvidePlugin = require('webpack').ProvidePlugin;

module.exports = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
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
                loader: "ts-loader",
            },
            {
                test:/(\.(scss|css))$/,
                loaders:['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/(\.(jpg|png|gif|jpeg))$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [],
    mode: 'production'
};
