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
          loader: "esbuild-loader",
          options: { target: "es2015" },
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    mode: "production",
  };

  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        reject(err);
      } else if (!stats || stats.hasErrors()) {
        reject(
          new Error(
            stats?.toString("errors-only") ?? "Webpack produced no build stats",
          ),
        );
      } else {
        console.log(stats.toString());
        resolve();
      }
    });
  });
}
