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
      path: path.resolve(__dirname, "dist"),
      module: true,
      libraryTarget: "module",
      // Do NOT clean — this build adds to the same dist/ folder produced by
      // `npm run build` (main + serviceWorker bundles) rather than replacing it.
      clean: false,
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
              // declarationDir/outDir fall back to tsconfig.json's ./dist and
              // ./dist/types, same as webpack.config.js, so both builds emit
              // into the same folder.
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
