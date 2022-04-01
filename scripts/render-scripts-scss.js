import { webpack } from "webpack";
import { upath } from "upath";
import { MiniCssExtractPlugin } from "mini-css-extract-plugin";
import { CssMinimizerPlugin } from "css-minimizer-webpack-plugin";

module.exports = function renderScriptsScss() {
  const destPath = upath.resolve(upath.dirname(__filename), "../dist/.");

  const webpackConfig = {
    entry: "./src/index.js",
    output: {
      filename: "scripts.js",
      path: destPath,
    },
    mode: "production",
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
    ],
    optimization: {
      minimizer: [`...`, new CssMinimizerPlugin()],
    },
    module: {
      rules: [
        {
          test: /\.(scss)$/,
          use: [
            {
              // extract CSS from .js back to .css
              loader: MiniCssExtractPlugin.loader,
            },
            {
              // translates CSS into CommonJS modules
              loader: "css-loader",
            },
            {
              // Run postcss actions
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: ["autoprefixer"],
                },
              },
            },
            {
              // compiles Sass to CSS
              loader: "sass-loader",
            },
          ],
        },
      ],
    },
  };

  webpack(webpackConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
      console.error(err);
    }
    console.log(stats.toString());
  });
};
