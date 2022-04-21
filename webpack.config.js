const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    "mode": "none",
    "entry": "./index.js",
    "output": {
        "path": __dirname + '/dist',
        "filename": "bundle.js",
        clean: true
    },
    devServer: {
        port: 3000
    },
    optimization: {
        minimizer: [new CssMinimizerPlugin()],
        usedExports: true,
        minimize: true
    },
    module: {
        rules: [
            {
                test: /\.jpe?g$|\.avif$|\.png$|\.webp$|\.svg$|\.txt$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]?[hash]',
                    publicPath: '/'
                }
            },
            {
                test: /\bmapbox-gl-csp-worker.js\b/i,
                use: {loader: 'worker-loader'}
            },
            {
                "test": /\.less$/,
                "use": [
                    MiniCssExtractPlugin.loader, "css-loader", "less-loader"
                ]
            },
            {
                "test": /\.css$/,
                "use": [
                    MiniCssExtractPlugin.loader, "css-loader"
                ]
            },
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "@babel/preset-env",
                        ]
                    }
                }
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'index.html',
        filename: 'index.html',
        scriptLoading: 'defer'
    }), new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({"MAP_KEY": `"${process.env.MAP_KEY}"`})]
}
