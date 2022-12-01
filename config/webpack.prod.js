const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    devtool: "cheap-module-source-map",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "./",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss&/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass_loader",
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [{ from: path.resolve(__dirname, "../public/assets"), to: path.resolve(__dirname, "../dist/assets") }], 
         }),
    ],
    optimization: {
        usedExports: true,
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            }),
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            chunks: "all",
        },
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
});