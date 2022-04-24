const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

let files = glob.sync('*.html', {})

let plugins;
plugins = files.map(
            file => {
                console.log(file)
                return new HtmlWebpackPlugin({
                    template: file,
                    filename: file,
                    scriptLoading: 'defer',
                });
            }
        );

module.exports = {
    mode: "development",
    entry: {
        index: {
            import: "./index.js",
            dependOn: ['mapbox']
        },
        mapbox: {
            import: './node_modules/mapbox-gl/dist/mapbox-gl-csp.js',
        }
    },
    output: {
        path: __dirname + '/dist',
        filename: "[name].bundle.js",
        clean: true
    },
    devServer: {
        port: 3000
    },
    optimization: {
        minimizer: [new CssMinimizerPlugin(), new TerserPlugin({
            test: /\.js(\?.*)?$/i,
        })],
        usedExports: true,
        minimize: true,
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                "test": /\/fonts\/icons\.css$/,
                type: 'asset/resource',
            },
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
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {url: false}
                    },
                    "less-loader"
                ],
            },
            {
                "test": /\.css$/,
                "use": [
                    MiniCssExtractPlugin.loader, "css-loader"
                ]
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({chunkFilename: '[name].css'}),
        new webpack.DefinePlugin({"MAP_KEY": `"${process.env.MAP_KEY}"`}),
    ].concat(plugins)
}
