const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// const CopyPlugin = require('copy-webpack-plugin');
// new CopyPlugin({
//     patterns: [{ from: path.resolve(__dirname, "../public/assets"), to: path.resolve(__dirname, "../dist/assets") }], 
//  }),

module.exports = {
    entry: `${path.resolve(__dirname, "../src")}/index.tsx`,
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)/,
                use: "babel-loader",
                exclude: /node_modules/,
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html"
        }),
        // new webpack.ProvidePlugin({
        //     React: "react",
        // }),
        // new CopyPlugin({
        //    patterns: [{ from: path.resolve(__dirname, "../public/assets"), to: path.resolve(__dirname, "../dist/assets") }], 
        // }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "../src"),
        },
        extensions: [".js", ".ts", ".jsx", ".tsx", ".css", "json"],
    },
};