import fs from "fs";
import ConvertTiff from "tiff-to-png";
import { glob } from "glob";
import shell from "shelljs";

const image_dir = "./dist/fileadmin/templates/iwr_vis";
fs.mkdirSync(image_dir, { recursive: true });

// convert tif images to png & write to dist/fileadmin/iwr_vis folder
const tifImageFiles = await glob("**/img/*.tif");
const converter = new ConvertTiff();
converter.convertArray(tifImageFiles, image_dir).then(console.log);

// just copy any jpg or png images to image_dir
shell.cp("./src/img/*.jpg", image_dir);
shell.cp("./src/img/*.jpeg", image_dir);
shell.cp("./src/img/*.png", image_dir);
