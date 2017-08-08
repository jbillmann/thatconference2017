const { resolve } = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common');

module.exports = function (env) {
    return Merge(CommonConfig, {
        entry: [
            'babel-polyfill',
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './app/Entry.js'
        ],

        output: {
            filename: 'bundle.js',
            path: resolve(__dirname, 'dist'),
            publicPath: 'http://localhost:8080/dist'
        },

        devServer: {
            hot: true,
            headers: { "Access-Control-Allow-Origin": "*" }
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify("development")
                }
            }),
            new webpack.ProvidePlugin({ // inject ES5 modules as global vars for Bootstrap
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Tether: 'tether'
            })
        ]
    })
}