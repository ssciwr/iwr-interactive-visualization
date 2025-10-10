import fs from "fs";
import { glob } from "glob";
import path from "path";
import { execSync } from "child_process";

const image_dir = "./dist/data/";
fs.mkdirSync(image_dir, { recursive: true });

// convert all image files to webp & write to image folder
const images = await glob("**/img/*.*");

for (const image of images) {
  const output = path.format({
    root: image_dir,
    name: path.parse(image).name,
    ext: ".webp",
  });
  console.log(`${image} --> ${output}`);
  execSync(`cwebp ${image} -o ${output} -quiet`);
}
