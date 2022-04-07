import webpack from "webpack";
import shell from "shelljs";

shell.cp("./src/index.html", "./dist/.");
shell.cp("./src/style.css", "./dist/.");

const webpackConfig = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: shell.pwd() + "/dist",
  },
  mode: "production",
};

webpack(webpackConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err);
  }
  console.log(stats.toString());
});
