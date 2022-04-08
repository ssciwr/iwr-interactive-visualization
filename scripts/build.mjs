import webpack from "webpack";
import shell from "shelljs";

// copy html & css to dist folder
shell.mkdir("p", "./dist");
shell.cp("./src/html/index.html", "./dist/.");
shell.cp("./src/css/style.css", "./dist/.");

// create bundle from javascript using webpack
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
