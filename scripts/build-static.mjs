import fs from "fs";
import shell from "shelljs";

export function buildStatic() {
  // copy html, css to dist folder
  fs.mkdirSync("./dist", { recursive: true });
  shell.cp("./src/html/index.html", "./dist/.");
  shell.cp("./src/css/style.css", "./dist/.");

  // copy json data to dist/data
  const data_dir = "./dist/data";
  shell.mkdir("-p", data_dir);
  shell.cp("./src/data/data.json", data_dir);
}
