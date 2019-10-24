const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

const dist = path.resolve(__dirname, "dist");

module.exports = {
    mode: "production",
    entry: {
        index: "./src/index.ts"
    },
    output: {
        path: dist,
        filename: "[name].js"
    },
    devServer: {
        contentBase: dist,
        host: "0.0.0.0"
    },
    plugins: [
        new CopyPlugin([
            path.resolve(__dirname, "static")
        ]),
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, "crate")
        }),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".wasm"]
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader"
        }]
    }
};
