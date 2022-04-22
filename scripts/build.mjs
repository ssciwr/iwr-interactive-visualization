import webpack from "webpack";
import shell from "shelljs";
import ConvertTiff from "tiff-to-png";
import glob from "glob";

// copy html & css to dist folder
shell.mkdir("-p", "./dist");
shell.cp("./src/html/index.html", "./dist/.");
shell.cp("./src/css/style.css", "./dist/.");

// convert tif images to png & write to dist folder
const options = {
  cwd: ".",
};
const converter = new ConvertTiff();
const forFiles = (err, files) => {
  if (err) console.log(err);
  converter.convertArray(files, "./dist");
};
glob("**/img/*.tif", options, forFiles);

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