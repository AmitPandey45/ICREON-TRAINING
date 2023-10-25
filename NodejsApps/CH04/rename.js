const fs = require("fs");

// fs.renameSync(".././CH03/lib/config.js", ".././CH03/lib/project-config.js");
// console.log("Config.js file renamed");

// fs.rename(".././CH03/lib//Notes.md", "project-notes.md", (err) => {
//   if (err) {
//     console.log(`ERROR: ${err}`);
//     throw err;
//   }
//   console.log("Notes.md renamed and moved to current directory");
// });

// fs.unlinkSync(".././CH03/lib/sample-file.js");
// console.log("File is removed");

fs.unlink(".././CH03/lib/notes-gone.md", (err) => {
  if (err) {
    console.log(`ERROR: ${err}`);
    throw err;
  }

  console.log("Notes.gone.md is gone");
});
