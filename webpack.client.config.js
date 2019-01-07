const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./src/client/index.tsx",
    output: {
        filename: "client.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        index: path.join(__dirname, 'src/client/index.html'),
        compress: true,
        port: 9000 
    },
    plugins: [
        new webpack.IgnorePlugin(/^electron$/)
    ]
}