const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common');

module.exports = function (env) {
    return Merge(CommonConfig, {
        entry: [
            'babel-polyfill',
            './app/Entry.js'
        ],

        output: {
            path: path.join(__dirname, '../dist'),
            filename: 'bundle.js',
            publicPath: '/dist/'
        },

        plugins: [
            new webpack.ProvidePlugin({ // inject ES5 modules as global vars for Bootstrap
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Tether: 'tether'
            })
        ]
    })
}