import { sh } from "shelljs";
import { upath } from "upath";

const destPath = upath.resolve(upath.dirname(__filename), "../dist");

sh.rm("-rf", `${destPath}/*`);
