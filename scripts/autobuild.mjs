import chokidar from "chokidar";
import { buildStatic } from "./build-static.mjs";
import { buildScripts } from "./build-scripts.mjs";

// re-build static assets / scripts when modified
chokidar.watch("src").on("change", (path) => {
  console.log(`- ${path} modified`);
  if (path.startsWith("src/js")) {
    console.log(`  -> buildScripts()`);
    buildScripts();
  } else {
    console.log(`  -> buildStatic()`);
    buildStatic();
  }
});
