import fs from "fs";
import ConvertTiff from "tiff-to-png";
import glob from "glob";
import shell from "shelljs";

const image_dir = "./dist/fileadmin/templates/iwr_vis";
fs.mkdirSync(image_dir, { recursive: true });

// convert tif images to png & write to dist/fileadmin/iwr_vis folder
const options = {
  cwd: ".",
};
const converter = new ConvertTiff();
const forFiles = (err, files) => {
  if (err) console.log(err);
  converter.convertArray(files, image_dir).then(console.log);
};
glob("**/img/*.tif", options, forFiles);

// just copy any jpg or png images to image_dir
shell.cp("./src/img/*.jpg", image_dir);
shell.cp("./src/img/*.jpeg", image_dir);
shell.cp("./src/img/*.png", image_dir);
