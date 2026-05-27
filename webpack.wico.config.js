const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env) => {
  const isDev = env?.NODE_ENV === "development";

  return {
    entry: {
      wico: "./src/wico.ts",
    },
    mode: isDev ? "development" : "production",
    devtool: false,
    watch: false,
    output: {
      filename: "wico-metadata.bundle.js",
      path: path.resolve(__dirname, "dist-wico"),
      module: true,
      libraryTarget: "module",
      clean: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      mainFields: ["module", "browser", "main"],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: {
            loader: "ts-loader",
            options: {
              onlyCompileBundledFiles: true,
              compilerOptions: {
                declarationDir: path.resolve(__dirname, "dist-wico", "types"),
                outDir: path.resolve(__dirname, "dist-wico"),
              },
            },
          },
          exclude: /node_modules/,
        },
      ],
    },
    target: "web",
    optimization: {
      minimize: !isDev,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: !isDev,
              pure_funcs: !isDev ? ["console.log", "console.warn", "console.info", "console.debug"] : [],
            },
          },
        }),
      ],
    },
    experiments: {
      outputModule: true,
    },
  };
};
