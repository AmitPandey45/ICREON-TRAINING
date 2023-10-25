const fs = require("fs");

// fs.renameSync("./assets1/logs", "./accounts/logs");
// console.log("Logs folder moved");

// fs.rmdir("./accounts", function (err) {
//   if (err) {
//     console.log(`ERROR: ${err}`);
//     throw err;
//   }

//   console.log("./accounts directory removed");
// });

// fs.rmdir("./assets1", function (err) {
//   if (err) {
//     console.log(`ERROR: ${err}`);
//     throw err;
//   }

//   console.log("./assets1 directory removed");
// });

fs.readdirSync("./assets2/logs").forEach((file) => {
  fs.renameSync(`./assets2/logs/${file}`, `./library/${file}`);
});

console.log("Files moved");
fs.rmdirSync("./assets2/logs");
console.log("Folder deleted ./assets2/logs");
