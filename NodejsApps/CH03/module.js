const path = require("path");
const util = require("util");
const v8 = require("v8");

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename));

const dirUpload = path.join(__dirname, "www", "files", "upload");
console.log(dirUpload);

util.log(path.basename(__filename));
util.log(dirUpload);

util.log(v8.getHeapStatistics());
