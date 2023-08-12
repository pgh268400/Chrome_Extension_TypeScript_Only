const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { glob } = require("glob");

module.exports = {
  mode: "production",
  // entry: {
  // background: path.resolve(__dirname, "..", "src", "background.ts"),
  // },
  entry: glob
    .sync("../src/**/*.ts", { cwd: __dirname })
    .reduce(function (obj, element) {
      const dir = element
        .replace("..\\src\\", "")
        .replace("../src/", "")
        .replace(".ts", "");
      obj[dir] = element;
      return obj;
    }, {}),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: ".", to: ".", context: "public" }],
    }),
  ],
};
