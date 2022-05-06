import webpack from "webpack";
import shell from "shelljs";

export function buildScripts() {
  // create javascript bundle from typescript sources using webpack
  const webpackConfig = {
    entry: "./src/index.ts",
    output: {
      filename: "bundle.js",
      path: shell.pwd() + "/dist",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    mode: "production",
  };

  webpack(webpackConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
      console.error(err);
    }
    console.log(stats.toString());
  });
}
