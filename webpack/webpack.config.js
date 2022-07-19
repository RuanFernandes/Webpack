const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "../dist"),
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
    ],
};
