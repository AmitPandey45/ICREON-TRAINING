const fs = require("fs");

let md = `
This is a New File
=================

ES6 Template Strings are cool. They honor whitespace.

*Template Strings
*Node File Systems
*Readline CLIs`;

fs.writeFile("javascript.md", md.trim(), function (err) {
  if (err) {
    console.log(err);
    throw err;
  }

  fs.appendFileSync("javascript.md", "\n\n ### Node.js Everyone!!");
  console.log("Markdown created");
});
