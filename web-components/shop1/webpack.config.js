const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/bundle-web-component.tsx",
  output: {
    filename: 'shop1.js',
  },
  mode: "development",
  devServer: {
    port: 3021,
    open: true,
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
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
