'use strict';

import webpack from 'webpack';

export default const wpconfig = {
    entry: './browser/index.jsx',
    output: {
        path: __dirname,
        filename: './browser/public/bundle.js'
    },
    context: __dirname,
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};