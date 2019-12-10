module.exports = function(api){
    api.cache(true);


    return {
        presets: ['@babel/preset-react', '@babel/preset-env'],
        plugins: ['react-hot-loader/babel']
    };
}
