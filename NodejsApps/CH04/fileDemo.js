const fs = require("fs");

const files = fs.readdirSync("./");
console.log(files);

fs.readdir("./", (err, files) => {
  if (err) {
    console.log(err);
    throw err;
  }
  console.log(files);
});

console.log("Reading files from current directory...");
