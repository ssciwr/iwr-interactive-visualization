import fs from "fs";
import shell from "shelljs";

export function buildStatic() {
  // copy html, css to dist folder
  fs.mkdirSync("./dist", { recursive: true });
  shell.cp("./src/html/index.html", "./dist/.");
  shell.cp("./src/css/style.css", "./dist/.");

  // copy json data to dist/fileadmin/iwr_vis
  const data_dir = "./dist/fileadmin/templates/iwr_vis";
  shell.mkdir("-p", data_dir);
  shell.cp("./src/data/data.json", data_dir);
}
