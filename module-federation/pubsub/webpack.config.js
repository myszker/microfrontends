const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3033,
    open: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "@mfe/pubsub",
      library: { type: "var", name: "mfe_pubsub" },
      filename: "remoteEntry.js",
      exposes: {
        ".": "./src",
      },
      shared: {
        ...deps,
      },
    }),
  ],
};
