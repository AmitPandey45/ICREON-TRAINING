const fs = require("fs");

const fileContent = fs.readFileSync("./readme.md", "UTF-8");
console.log(fileContent);

console.log("Reading file content...");

fs.readFile("./readme.md", "utf-8", (err, fileContent) => {
  if (err) {
    console.log(err);
    throw err;
  }

  console.log(fileContent);
});
