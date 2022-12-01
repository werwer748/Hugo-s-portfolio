const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        open: false,
        hot: true,
        compress: true,
        port: 3000,
        historyApiFallback: true,
        liveReload: true,
    },
    output: {
        filename: "[name].[contenthash].js",
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.(ss|sc|c)ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpe?g|gif|png|webp|bmp|svg)$/,
                type: 'asset',
            }
        ],
    },
});